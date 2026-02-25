#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const puppeteer = require('puppeteer');

// Promisify fs methods for async/await usage
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const unlink = promisify(fs.unlink);
const rmdir = promisify(fs.rmdir);
const copyFile = promisify(fs.copyFile);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

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
            hiddenFilesSkipped: 0,
        };
        this.skipFiles = ['package-lock.json'];
        this.skipDirectories = [path.basename(this.outputDir), 'node_modules'];
        this.allowedHiddenEntries = ['.vscode'];
        this.markdownToConvert = ['README.md', 'syntax-list.md'];
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

            // Log hidden files skipped
            if (this.processedCount.hiddenFilesSkipped > 0) {
                console.log(`🙈 Skipped ${this.processedCount.hiddenFilesSkipped} hidden files and directories`);
            }

            // Process files in the output directory
            await this.simplifyStudentPackageJson();
            await this.removeSolutionFiles();
            await this.removeInstructorFiles();
            await this.replaceSettingsFile();
            await this.cleanupDirectories();
            await this.convertMarkdownToPdf();

            this.printSummary();
        } catch (error) {
            console.error('❌ Error during processing:', error.message);
            process.exit(1);
        }
    }

    /**
     * Simplify root package.json for student distribution
     */
    async simplifyStudentPackageJson() {
        console.log('📦 Simplifying package.json for student version...');

        const packageJsonPath = path.join(this.outputDir, 'package.json');

        try {
            if (!fs.existsSync(packageJsonPath)) {
                console.log('   ⚠️  package.json not found, skipping simplification');
                return;
            }

            const content = await readFile(packageJsonPath, 'utf-8');
            const packageJson = JSON.parse(content);

            const simplified = {
                studentId: packageJson.studentId || 'YOUR STUDENT ID e.g. p1121782',
                className: packageJson.class || packageJson.className || 'YOUR CLASS e.g. DIT/FT/1A/01',
            };

            await writeFile(packageJsonPath, `${JSON.stringify(simplified, null, 4)}\n`);
            console.log('   ✓ package.json simplified to student fields only');
        } catch (error) {
            console.log(`   ⚠️  Could not simplify package.json: ${error.message}`);
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

            const stats = await stat(sourcePath);

            if (this.shouldSkipEntry(entry, sourcePath, stats)) {
                continue;
            }

            if (stats.isDirectory()) {
                await this.ensureDirectory(destPath);
                await this.copyAllFiles(sourcePath, destPath);
            } else {
                await copyFile(sourcePath, destPath);
            }
        }
    }

    /**
     * Determine whether an entry should be skipped during copy
     */
    shouldSkipEntry(entry, sourcePath, stats) {
        if (sourcePath === this.outputDir) {
            return true;
        }

        if (entry.startsWith('.') && !this.allowedHiddenEntries.includes(entry)) {
            this.processedCount.hiddenFilesSkipped++;
            return true;
        }

        if (stats.isDirectory() && this.skipDirectories.includes(entry)) {
            return true;
        }

        if (stats.isFile() && this.skipFiles.includes(entry)) {
            return true;
        }

        return false;
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
     * Convert README.md to PDF using marked and puppeteer
     */
    async convertMarkdownToPdf() {
        console.log('📝 Converting Markdown to PDF...');

        const readmeFile = await Promise.all(
            this.markdownToConvert.map((fileName) => this.findFiles(this.outputDir, fileName)),
        ).then((results) => results.flat());

        try {
            // Load marked, katex, and highlight.js dynamically
            const markedModule = await import('marked');
            const markedLib = markedModule.marked;
            const katexModule = await import('katex');
            const katex = katexModule.default;
            const hljsModule = await import('highlight.js');
            const hljs = hljsModule.default;

            // Configure marked with KaTeX extensions
            markedLib.use({
                renderer: {
                    code(token) {
                        const code = token.text || '';
                        const language = (token.lang || '').trim();

                        if (language && hljs.getLanguage(language)) {
                            const highlighted = hljs.highlight(code, { language }).value;
                            return `<pre><code class="hljs language-${language}">${highlighted}</code></pre>`;
                        }

                        const highlighted = hljs.highlightAuto(code).value;
                        return `<pre><code class="hljs">${highlighted}</code></pre>`;
                    },
                },
                extensions: [
                    {
                        name: 'blockMath',
                        level: 'block',
                        start(src) {
                            return src.match(/\$\$/)?.index;
                        },
                        tokenizer(src) {
                            const match = src.match(/^\$\$([\s\S]+?)\$\$(?:\n|$)/);
                            if (!match) {
                                return undefined;
                            }

                            return {
                                type: 'blockMath',
                                raw: match[0],
                                text: match[1].trim(),
                            };
                        },
                        renderer(token) {
                            return katex.renderToString(token.text, {
                                displayMode: true,
                                throwOnError: false,
                                output: 'htmlAndMathml',
                            });
                        },
                    },
                    {
                        name: 'inlineMath',
                        level: 'inline',
                        start(src) {
                            return src.match(/\$/)?.index;
                        },
                        tokenizer(src) {
                            const match = src.match(/^\$([^$\n]+?)\$/);
                            if (!match) {
                                return undefined;
                            }

                            return {
                                type: 'inlineMath',
                                raw: match[0],
                                text: match[1].trim(),
                            };
                        },
                        renderer(token) {
                            return katex.renderToString(token.text, {
                                displayMode: false,
                                throwOnError: false,
                                output: 'htmlAndMathml',
                            });
                        },
                    },
                ],
            });

            const templatePath = path.join(this.rootDir, 'instructor', 'markdown-pdf-template.html');
            let htmlTemplate;

            try {
                htmlTemplate = await readFile(templatePath, 'utf-8');
            } catch (templateError) {
                console.log(`   ⚠️  Could not load HTML template: ${templateError.message}`);
                return;
            }

            for (const readmePath of readmeFile) {
                try {
                    const markdown = await readFile(readmePath, 'utf-8');
                    const html = markedLib.parse(markdown, {
                        gfm: true,
                        breaks: true,
                    });

                    // Inject markdown HTML into external template
                    const fullHtml = htmlTemplate.replace('{{CONTENT}}', html);

                    // Launch Puppeteer and render PDF
                    const browser = await puppeteer.launch({
                        headless: 'new',
                        executablePath:
                            process.env.CHROME_PATH ||
                            'C:\\\\Program Files\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe',
                    });
                    const page = await browser.newPage();
                    await page.setContent(fullHtml, { waitUntil: 'networkidle0' });
                    await page.emulateMediaType('screen');
                    const pdfBuffer = await page.pdf({
                        format: 'A4',
                        printBackground: true,
                        margin: {
                            top: '12mm',
                            bottom: '12mm',
                            left: '12mm',
                            right: '12mm',
                        },
                    });
                    await browser.close();

                    // Save PDF with same name as README
                    const pdfPath = readmePath.replace(/\.md$/i, '.pdf');
                    await writeFile(pdfPath, pdfBuffer);
                    await unlink(readmePath);
                    console.log(`   ✓ Converted ${path.basename(readmePath)} to ${path.basename(pdfPath)}`);
                } catch (conversionError) {
                    console.log(`   ⚠️  Could not convert ${path.basename(readmePath)}: ${conversionError.message}`);
                }
            }
        } catch (error) {
            console.log(`   ⚠️  Could not convert README to PDF: ${error.message}`);
        }
    }

    /**
     * Clean up instructor directories
     */
    async cleanupDirectories() {
        console.log('🧹 Cleaning up instructor directories...');

        const directoriesToRemove = ['instructor', 'instructor-notes', 'solutions', 'node_modules'];

        // Remove directories
        for (const dirName of directoriesToRemove) {
            const dirPath = path.join(this.outputDir, dirName);

            try {
                if (fs.existsSync(dirPath)) {
                    const removedFiles = await this.removeDirectory(dirPath);

                    if (dirName === 'instructor' || dirName === 'instructor-notes') {
                        this.processedCount.instructorFiles += removedFiles;
                    }

                    this.processedCount.directories++;
                    console.log(`   ✓ Removed ${dirName}/ directory`);
                }
            } catch (error) {
                console.log(`   ⚠️  Could not remove ${dirName}/ directory: ${error.message}`);
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
        let removedFiles = 0;

        for (const entry of entries) {
            const fullPath = path.join(dir, entry);
            const stats = await stat(fullPath);

            if (stats.isDirectory()) {
                removedFiles += await this.removeDirectory(fullPath);
            } else {
                await unlink(fullPath);
                removedFiles++;
            }
        }

        await rmdir(dir);
        return removedFiles;
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
        console.log(`🙈 Hidden files skipped: ${this.processedCount.hiddenFilesSkipped}`);
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
