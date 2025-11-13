#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

// Promisify fs methods for async/await usage
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const unlink = promisify(fs.unlink);
const rmdir = promisify(fs.rmdir);
const copyFile = promisify(fs.copyFile);

/**
 * Process files for student version by removing instructor-only content
 * This script replicates the "Process files for student version" step from the GitHub workflow
 */
class StudentFileProcessor {
    constructor(rootDir = process.cwd()) {
        this.rootDir = rootDir;
        this.outputDir = path.join(rootDir, 'student-version');
        this.processedCount = {
            solutionFiles: 0,
            instructorFiles: 0,
            directories: 0,
            settings: 0,
        };
    }

    /**
     * Main processing function
     */
    async process() {
        console.log('🎓 Processing files for student version...\n');
        console.log('📂 Source directory:', this.rootDir);
        console.log('📁 Output directory:', this.outputDir);
        console.log('─'.repeat(50));

        try {
            // Create output directory
            await this.ensureDirectory(this.outputDir);

            // Copy all files first (excluding target directory)
            await this.copyAllFiles(this.rootDir, this.outputDir);

            // Process files in the output directory
            await this.removeSolutionFiles();
            await this.removeInstructorFiles();
            await this.replaceSettingsFile();
            await this.cleanupDirectories();

            this.printSummary();
        } catch (error) {
            console.error('❌ Error during processing:', error.message);
            process.exit(1);
        }
    }

    /**
     * Recursively copy all files except excluded patterns
     */
    async copyAllFiles(source, destination) {
        const entries = await readdir(source);

        for (const entry of entries) {
            const sourcePath = path.join(source, entry);
            const destPath = path.join(destination, entry);

            // Skip the output directory itself to avoid recursion
            if (sourcePath === this.outputDir) {
                continue;
            }

            const stats = await stat(sourcePath);

            if (stats.isDirectory()) {
                await this.ensureDirectory(destPath);
                await this.copyAllFiles(sourcePath, destPath);
            } else {
                await copyFile(sourcePath, destPath);
            }
        }
    }

    /**
     * Remove all solution.js files efficiently
     */
    async removeSolutionFiles() {
        console.log('🗑️  Removing solution.js files...');
        const solutionFiles = await this.findFiles(this.outputDir, 'solution.js');

        for (const file of solutionFiles) {
            await unlink(file);
            this.processedCount.solutionFiles++;
        }

        console.log(`   ✓ Removed ${this.processedCount.solutionFiles} solution.js files`);
    }

    /**
     * Remove instructor-only files (*.instructor.* and instructor-*)
     */
    async removeInstructorFiles() {
        console.log('🗑️  Removing instructor-only files...');

        const instructorFiles = await this.findInstructorFiles(this.outputDir);

        for (const file of instructorFiles) {
            await unlink(file);
            this.processedCount.instructorFiles++;
        }

        console.log(`   ✓ Removed ${this.processedCount.instructorFiles} instructor-only files`);
    }

    /**
     * Replace settings.json with student version (disable Copilot)
     */
    async replaceSettingsFile() {
        console.log('⚙️  Replacing settings.json with student version...');

        const studentSettingsPath = path.join(this.outputDir, 'instructor', 'student-settings.json');
        const vscodeSettingsPath = path.join(this.outputDir, '.vscode', 'settings.json');

        try {
            const studentSettingsExists = fs.existsSync(studentSettingsPath);

            if (studentSettingsExists) {
                // Ensure .vscode directory exists
                await this.ensureDirectory(path.join(this.outputDir, '.vscode'));

                // Copy student settings to .vscode/settings.json
                await copyFile(studentSettingsPath, vscodeSettingsPath);
                this.processedCount.settings++;
                console.log('   ✓ Replaced settings.json with student version');
            } else {
                console.log('   ⚠️  student-settings.json not found, skipping settings replacement');
            }
        } catch (error) {
            console.log(`   ⚠️  Could not replace settings.json: ${error.message}`);
        }
    }

    /**
     * Clean up instructor directories and GitHub workflows
     */
    async cleanupDirectories() {
        console.log('🧹 Cleaning up instructor directories and GitHub workflows...');

        const directoriesToRemove = ['instructor', 'instructor-notes', 'solutions', '.github'];

        const filesToRemove = ['.gitignore'];

        // Remove directories
        for (const dirName of directoriesToRemove) {
            const dirPath = path.join(this.outputDir, dirName);

            try {
                if (fs.existsSync(dirPath)) {
                    await this.removeDirectory(dirPath);
                    this.processedCount.directories++;
                    console.log(`   ✓ Removed ${dirName}/ directory`);
                }
            } catch (error) {
                console.log(`   ⚠️  Could not remove ${dirName}/ directory: ${error.message}`);
            }
        }

        // Remove files
        for (const fileName of filesToRemove) {
            const filePath = path.join(this.outputDir, fileName);

            try {
                if (fs.existsSync(filePath)) {
                    await unlink(filePath);
                    this.processedCount.directories++; // Using same counter for simplicity
                    console.log(`   ✓ Removed ${fileName} file`);
                }
            } catch (error) {
                console.log(`   ⚠️  Could not remove ${fileName} file: ${error.message}`);
            }
        }
    }

    /**
     * Find files by name pattern recursively
     */
    async findFiles(dir, fileName) {
        const files = [];
        const entries = await readdir(dir);

        for (const entry of entries) {
            const fullPath = path.join(dir, entry);
            const stats = await stat(fullPath);

            if (stats.isDirectory()) {
                files.push(...(await this.findFiles(fullPath, fileName)));
            } else if (entry === fileName) {
                files.push(fullPath);
            }
        }

        return files;
    }

    /**
     * Find instructor-only files (*.instructor.* and instructor-*)
     */
    async findInstructorFiles(dir) {
        const files = [];
        const entries = await readdir(dir);

        for (const entry of entries) {
            const fullPath = path.join(dir, entry);
            const stats = await stat(fullPath);

            if (stats.isDirectory()) {
                files.push(...(await this.findInstructorFiles(fullPath)));
            } else if (entry.includes('.instructor.') || entry.startsWith('instructor-')) {
                files.push(fullPath);
            }
        }

        return files;
    }

    /**
     * Recursively remove directory and its contents
     */
    async removeDirectory(dir) {
        const entries = await readdir(dir);

        for (const entry of entries) {
            const fullPath = path.join(dir, entry);
            const stats = await stat(fullPath);

            if (stats.isDirectory()) {
                await this.removeDirectory(fullPath);
            } else {
                await unlink(fullPath);
            }
        }

        await rmdir(dir);
    }

    /**
     * Ensure directory exists, create if it doesn't
     */
    async ensureDirectory(dir) {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
    }

    /**
     * Print processing summary
     */
    printSummary() {
        console.log('\n' + '═'.repeat(50));
        console.log('📊 Processing Summary');
        console.log('═'.repeat(50));
        console.log(`✅ Files processed successfully!`);
        console.log(`📄 Solution files removed: ${this.processedCount.solutionFiles}`);
        console.log(`🎓 Instructor files removed: ${this.processedCount.instructorFiles}`);
        console.log(`📁 Directories cleaned: ${this.processedCount.directories}`);
        console.log(`⚙️  Settings files updated: ${this.processedCount.settings}`);
        console.log(`📂 Student version available at: ${this.outputDir}`);
        console.log('═'.repeat(50));
    }
}

// CLI Usage
if (require.main === module) {
    const args = process.argv.slice(2);
    const rootDir = args[0] || process.cwd();

    console.log('🎓 FOP Practical Student File Processor');
    console.log('════════════════════════════════════════\n');

    const processor = new StudentFileProcessor(rootDir);
    processor.process().catch((error) => {
        console.error('❌ Fatal error:', error.message);
        process.exit(1);
    });
}

module.exports = StudentFileProcessor;
