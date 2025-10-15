# Instructor Deployment Workflow

This repository uses GitHub Actions to automatically deploy a cleaned, student-ready version to the `practical-1` repository whenever changes are pushed to the main branch.

## Setup Instructions

### 1. Create GitHub App

1. Go to GitHub Organization Settings → Developer settings → GitHub Apps
2. Click "New GitHub App" and configure:
    - **App name**: `SP-DIT-Practical-Deployer`
    - **Homepage URL**: Your organization URL
    - **Repository permissions**:
        - Contents: `Write` (to push to student repos)
        - Metadata: `Read` (to access repo info)
    - **Where can this app be installed**: `Only on this account`
3. After creation, note the **App ID**
4. Generate and download a **Private Key**
5. Install the app on your organization and grant access to student repositories

### 2. Add Repository Secrets

1. Go to your main repository (ST0523-FOP-practicals) settings
2. Navigate to Secrets and variables → Actions
3. Create these repository secrets:
    - `APP_ID`: The GitHub App ID from step 1
    - `APP_PRIVATE_KEY`: The entire contents of the private key file (including `-----BEGIN RSA PRIVATE KEY-----` and `-----END RSA PRIVATE KEY-----`)

### 3. Workflow ConfigurationThe workflow automatically:

#### File Processing:

-   ✅ Removes all `solution.js` files
-   ✅ Removes instructor-only files (`*.instructor.*`, `instructor-*`)
-   ✅ Converts `README.md` to PDF (optional)

#### File Processing:

-   ✅ Removes all `solution.js` files
-   ✅ Removes instructor-only files (`*.instructor.*`, `instructor-*`)
-   ✅ Replaces VS Code settings to disable Copilot for students
-   ✅ Cleans up workflow files and instructor folder

#### Deployment:

-   ✅ Auto-detects target repository from branch name
-   ✅ Clones the student repository
-   ✅ Replaces content with processed files
-   ✅ Commits and pushes changes

## Usage

### Repository Targeting

The workflow automatically determines which student repository to deploy to:

-   **Branch `practical-1`** → Deploys to `SP-DIT/practical-1`
-   **Branch `practical-2`** → Deploys to `SP-DIT/practical-2`
-   **Manual override**: Edit `STUDENT_REPO_NAME` in the workflow file

### Automatic Deployment

Simply push to the main/master branch:

```bash
git push origin main
```

### Manual Deployment

Trigger manually from GitHub Actions tab:

1. Go to Actions tab in your repository
2. Select "Deploy to Student Repository" workflow
3. Click "Run workflow"

## Repository Structure

```
ST0523-FOP-practicals/           # Main instructor repository
├── .github/workflows/
│   └── deploy-to-student-repo.yml
├── .vscode/
│   └── settings.json            # Instructor settings (with Copilot enabled)
├── instructor/
│   ├── README.md                # This documentation
│   └── student-settings.json    # Student settings template (Copilot disabled)
├── 1Introduction/
│   └── q1/
│       ├── code.js              # Template for students
│       ├── solution.js          # REMOVED in student version
│       └── testcases.js         # Modified for student version
├── README.md                    # Kept as markdown
└── run.js                       # Kept as-is

practical-1/                     # Student repository (auto-generated)
├── .vscode/
│   └── settings.json            # Student settings (Copilot disabled)
├── 1Introduction/
│   └── q1/
│       ├── code.js              # Template for students
│       └── testcases.js         # Student-friendly version
├── README.md                    # Rendered nicely by GitHub
└── run.js                       # Testing framework
```

## Benefits of GitHub Apps

Using GitHub Apps instead of Personal Access Tokens provides several advantages:

-   **Organization Control**: Apps are managed at the organization level, not tied to individual users
-   **Fine-grained Permissions**: Apps can be granted specific permissions only for what they need
-   **Better Security**: Apps use JWT-based authentication with shorter-lived tokens
-   **Audit Trail**: All app actions are logged and can be monitored
-   **Shared Access**: Multiple instructors can use the same app without sharing personal tokens
-   **Automatic Token Refresh**: GitHub Actions handles token lifecycle automatically

## Troubleshooting

### GitHub App Issues

-   Ensure the app is installed on the SP-DIT organization
-   Check that the app has access to the target student repositories
-   Verify the App ID and Private Key are correctly set in repository secrets
-   Ensure the private key includes the full content with BEGIN/END markers

### Workflow Failures

-   Check the Actions tab for detailed logs
-   Ensure the target student repository exists
-   Verify branch names match the configuration
-   Check that the GitHub App has sufficient permissions

### Permission Issues

-   Verify the GitHub App has `Contents: Write` permission
-   Ensure the app is installed on repositories you're trying to access
-   Check organization settings don't block the app
