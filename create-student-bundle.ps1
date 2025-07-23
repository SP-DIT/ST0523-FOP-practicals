<#
.SYNOPSIS
    FOP Practicals - Student Bundle Creator
    Creates a clean distribution bundle for students (excludes solution files)

.DESCRIPTION
    This script creates a student-ready bundle of the FOP practicals project.
    It automatically excludes the solution folder and other instructor-only files,
    while including all the files students need (questions, testcases, .vscode settings, etc.)

.PARAMETER OutputName
    Custom name for the bundle (default: "fop-practicals-student")
    Example: -OutputName "FOP-Semester1-2024"

.PARAMETER DryRun
    Preview what will be bundled without creating any files
    Example: -DryRun

.EXAMPLES
    .\create-student-bundle.ps1
    Basic usage - creates "fop-practicals-student-YYYYMMDD.zip"

    .\create-student-bundle.ps1 -OutputName "FOP-Assignment-2024"
    Custom bundle name

    .\create-student-bundle.ps1 -DryRun
    Preview what will be included/excluded


.NOTES
    HOW TO CUSTOMIZE:
    - Edit the variables in the "EASY CONFIGURATION SECTION" below
    - Add folders to $ExcludeFolders to exclude more directories
    - Add file patterns to $ExcludeFiles to exclude more files
    
    WHAT GETS EXCLUDED:
    - solution/ folder (contains all answers!)
    - .git/ folder (version control)
    - build.sh (instructor build script)
    
    WHAT GETS INCLUDED:
    - questions/ (student exercises)
    - testcases/ (validation files)
    - .vscode/ (VS Code settings with AI disabled)
    - README.md, package.json, run.js

    The script creates both a temporary folder AND a zip file.
    The temp folder is kept so you can inspect the contents before distribution.

.AUTHOR
    Created for FOP Practicals Distribution
#>

param(
    [string]$OutputName,
    [switch]$DryRun
)

# ===== EASY CONFIGURATION SECTION =====
# Just modify these variables to change what gets bundled

# Bundle naming
$DefaultBundleName = "fop-practicals-student"
$IncludeTimestamp = $true

# What to EXCLUDE (these won't be in the student bundle)
$ExcludeFolders = @(
    "solution"     # Contains all the answers!
)

$ExcludeFiles = @(
    "build.sh",     # Your original build script
    "create-student-bundle.ps1" # This script
)

# What to FORCE INCLUDE (just to be explicit)
$ForceInclude = @(
    ".vscode",      # VS Code settings (AI disabled)
    "questions",    # Student exercises
    "testcases",    # Validation files
    "README.md",    # Instructions
    "package.json", # Student info template
    "run.js"        # Test runner
)

# ===== SCRIPT LOGIC (don't modify below unless needed) =====

# Use parameter or default
$BundleName = if ($OutputName) { 
    # Custom name provided - use as-is (no timestamp)
    $OutputName 
} else { 
    # Default name - add timestamp if enabled
    if ($IncludeTimestamp) {
        $timestamp = Get-Date -Format "yyyyMMdd"
        "$DefaultBundleName-$timestamp"
    } else {
        $DefaultBundleName
    }
}

# Create paths
$SourcePath = $PWD.Path
$TempBundlePath = Join-Path $SourcePath $BundleName
$ZipPath = Join-Path $SourcePath "$BundleName.zip"

Write-Host "FOP Practicals - Student Bundle Creator" -ForegroundColor Green
Write-Host "====================================" -ForegroundColor Green
Write-Host "Source: $SourcePath" -ForegroundColor Cyan
Write-Host "Temp bundle: $TempBundlePath" -ForegroundColor Cyan
Write-Host "Final zip: $ZipPath" -ForegroundColor Cyan
Write-Host ""

# Function to check if a path should be excluded
function ShouldExclude($relativePath, $fileName) {
    # Check folder exclusions
    foreach ($excludeFolder in $ExcludeFolders) {
        if ($relativePath -like "$excludeFolder\*" -or $relativePath -like "*\$excludeFolder\*" -or $relativePath -eq $excludeFolder) {
            return $true
        }
    }
    
    # Check file exclusions
    foreach ($excludeFile in $ExcludeFiles) {
        if ($fileName -like $excludeFile) {
            return $true
        }
    }
    
    return $false
}

# Show what will be included/excluded
Write-Host "📁 Analyzing project structure..." -ForegroundColor Yellow
Write-Host ""
Write-Host "✅ INCLUDED in student bundle:" -ForegroundColor Green
foreach ($folder in (Get-ChildItem -Path $SourcePath -Directory)) {
    if (-not (ShouldExclude $folder.Name $folder.Name)) {
        $fileCount = (Get-ChildItem -Path $folder.FullName -Recurse -File | Measure-Object).Count
        Write-Host "  - $($folder.Name)/ ($fileCount files)" -ForegroundColor Green
    }
}

# Include root files that aren't excluded
$rootFiles = Get-ChildItem -Path $SourcePath -File | Where-Object { -not (ShouldExclude "" $_.Name) }
if ($rootFiles) {
    Write-Host "  - Root files: $($rootFiles.Name -join ', ')" -ForegroundColor Green
}

Write-Host ""
Write-Host "❌ EXCLUDED from student bundle:" -ForegroundColor Red
foreach ($folder in $ExcludeFolders) {
    if (Test-Path (Join-Path $SourcePath $folder)) {
        Write-Host "  - $folder/ folder" -ForegroundColor Red
    }
}
foreach ($file in $ExcludeFiles) {
    Write-Host "  - $file files" -ForegroundColor Red
}

if ($DryRun) {
    Write-Host ""
    Write-Host "🔍 DRY RUN - No files will be created" -ForegroundColor Yellow
    Write-Host "Bundle would be created at: $ZipPath" -ForegroundColor Yellow
    exit 0
}

Write-Host ""
Write-Host "📦 Creating temporary bundle folder..." -ForegroundColor Yellow

# Remove existing temp folder and zip if they exist
if (Test-Path $TempBundlePath) {
    Remove-Item $TempBundlePath -Recurse -Force
}
if (Test-Path $ZipPath) {
    Remove-Item $ZipPath -Force
}

# Create temp bundle directory
New-Item -ItemType Directory -Path $TempBundlePath -Force | Out-Null

$copiedFiles = 0

# Copy root level files (excluding ones that should be excluded)
Get-ChildItem -Path $SourcePath -File | Where-Object {
    -not (ShouldExclude "" $_.Name) -and $_.Name -ne "$BundleName.zip"
} | ForEach-Object {
    Copy-Item $_.FullName -Destination $TempBundlePath
    Write-Host "Copied: $($_.Name)" -ForegroundColor Gray
    $script:copiedFiles++
}

# Copy directories (excluding ones that should be excluded)
Get-ChildItem -Path $SourcePath -Directory | Where-Object {
    -not (ShouldExclude $_.Name $_.Name) -and $_.Name -ne $BundleName
} | ForEach-Object {
    $destDir = Join-Path $TempBundlePath $_.Name
    Copy-Item $_.FullName -Destination $destDir -Recurse
    $fileCount = (Get-ChildItem -Path $_.FullName -Recurse -File | Measure-Object).Count
    Write-Host "Copied directory: $($_.Name) ($fileCount files)" -ForegroundColor Gray
    $script:copiedFiles += $fileCount
}

Write-Host ""
Write-Host "📦 Creating zip archive..." -ForegroundColor Yellow

# Create zip file using Compress-Archive
Compress-Archive -Path $TempBundlePath -DestinationPath $ZipPath -Force

Write-Host "✅ Bundle created successfully!" -ForegroundColor Green

# Show final stats
$bundleSize = [math]::Round((Get-Item $ZipPath).Length / 1MB, 2)
Write-Host ""
Write-Host "📊 Bundle Statistics:" -ForegroundColor Cyan
Write-Host "  Files bundled: $copiedFiles" -ForegroundColor White
Write-Host "  Bundle size: $bundleSize MB" -ForegroundColor White
Write-Host "  Location: $ZipPath" -ForegroundColor White
Write-Host ""
Write-Host "🎓 Ready for student distribution!" -ForegroundColor Green 