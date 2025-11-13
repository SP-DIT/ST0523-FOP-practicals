# Student File Processor

This Node.js script processes FOP practical files to create a student-ready version by removing instructor-only content. It replicates the file processing logic from the GitHub workflow's "Process files for student version" step.

## What it does

The script performs the following operations:

1. **Remove solution files**: Deletes all `solution.js` files recursively
2. **Remove instructor files**: Deletes files matching patterns:
    - `*.instructor.*` (e.g., `example.instructor.js`)
    - `instructor-*` (e.g., `instructor-notes.txt`)
3. **Replace settings**: Copies `instructor/student-settings.json` to `.vscode/settings.json` (disables GitHub Copilot)
4. **Clean directories and files**: Removes entire directories and files:
    - `instructor/`
    - `instructor-notes/`
    - `solutions/`
    - `.github/`
    - `.gitignore`

## Usage

### Command Line

**PowerShell (Windows):**

```powershell
# Process current directory
node instructor/process-student-files.js

# Process specific directory
node instructor/process-student-files.js "C:\path\to\practical\folder"
```

**Bash (Linux/macOS):**

```bash
# Process current directory
node instructor/process-student-files.js

# Process specific directory
node instructor/process-student-files.js /path/to/practical/folder
```

### As a Module

```javascript
const StudentFileProcessor = require('./instructor/process-student-files.js');

const processor = new StudentFileProcessor('/path/to/source');
processor
    .process()
    .then(() => {
        console.log('Processing complete!');
    })
    .catch(console.error);
```

## Output

The script creates a `student-version/` directory containing the processed files. The original files remain untouched.

## Example Output

```
🎓 Processing files for student version...

📂 Source directory: C:\Users\instructor\FOP-Practical
📁 Output directory: C:\Users\instructor\FOP-Practical\student-version
──────────────────────────────────────────────────────
🗑️  Removing solution.js files...
   ✓ Removed 9 solution.js files
🗑️  Removing instructor-only files...
   ✓ Removed 3 instructor-only files
⚙️  Replacing settings.json with student version...
   ✓ Replaced settings.json with student version
🧹 Cleaning up instructor directories and GitHub workflows...
   ✓ Removed instructor/ directory
   ✓ Removed .github/ directory

══════════════════════════════════════════════════════
📊 Processing Summary
══════════════════════════════════════════════════════
✅ Files processed successfully!
📄 Solution files removed: 9
🎓 Instructor files removed: 3
📁 Directories cleaned: 2
⚙️  Settings files updated: 1
📂 Student version available at: C:\Users\instructor\FOP-Practical\student-version
══════════════════════════════════════════════════════
```

## Requirements

-   Node.js (any recent version)
-   No external dependencies (uses only Node.js built-in modules)

## Notes

-   The script creates a copy in `student-version/` - original files are never modified
-   All file operations are performed asynchronously for better performance
-   Error handling ensures the script fails gracefully with descriptive messages
-   Processing summary shows exactly what was removed/modified
