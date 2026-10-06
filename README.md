# DevOps Task 4 --- Version-Controlled DevOps Project with Git

## Project Overview

This project demonstrates a Git-based DevOps workflow using Git and
GitHub.

The objective of this task is to manage a DevOps project using Git best
practices, including branching, feature development, pull requests,
documentation, `.gitignore`, tags, and Git workflow practices.

## Tools Used

-   Git
-   Git Bash
-   GitHub
-   HTML
-   CSS
-   JavaScript
-   Google Chrome

## Project Structure

``` text
Github-Task4/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
├── .gitignore
└── README.md
```

## 1. Git Repository Initialization

The project was initialized as a Git repository and the initial project
files were committed.

``` bash
git init
git add .
git commit -m "first commit"
```

The initial commit was pushed to GitHub.

``` bash
git remote add origin <YOUR-GITHUB-REPOSITORY-URL>
git push -u origin main
```

## 2. Git Branching Strategy

The project uses the following branching structure:

``` text
main
  │
  └── dev
       │
       └── feature/project-enhancement
```

### Main Branch

`main` contains the stable, production-ready version of the project.

### Dev Branch

`dev` is used as the integration branch for completed features before
they are merged into `main`.

### Feature Branch

`feature/project-enhancement` is used for developing the new project
enhancement independently from the stable branches.

Branches were created using:

``` bash
git checkout -b dev
git push -u origin dev

git checkout -b feature/project-enhancement
git push -u origin feature/project-enhancement
```

## 3. Project Enhancement

A Git Workflow enhancement was added to the existing DevTrack web
application.

The Git Workflow page visually demonstrates:

``` text
MAIN
Production
   ↓
DEV
Integration
   ↓
FEATURE
Project Enhancement
   ↓
PULL REQUEST
Ready for Review
```

The application already contains a Git Workflow section that explains:

1.  Main --- stable production-ready code
2.  Dev --- integration branch for completed features
3.  Feature branches --- individual branches used for development
4.  Pull Requests --- features reviewed before merging into `dev`

The enhancement provides a clear visual representation of the current
feature-development workflow.

## 4. Feature Development Workflow

The feature was developed on:

``` bash
feature/project-enhancement
```

The changes were staged and committed using:

``` bash
git add .
git commit -m "feat: add branch workflow status"
git push
```

This keeps the feature isolated from the `main` and `dev` branches until
it is reviewed.

## 5. Pull Request Workflow

The intended GitHub workflow is:

``` text
feature/project-enhancement
          │
          │ Pull Request
          ▼
         dev
          │
          │ Pull Request
          ▼
         main
```

### Feature → Dev

A Pull Request is created on GitHub from:

``` text
feature/project-enhancement
```

to:

``` text
dev
```

After review and approval, the feature is merged into `dev`.

### Dev → Main

After integration testing on `dev`, a second Pull Request is created
from:

``` text
dev
```

to:

``` text
main
```

After review and approval, the stable changes are merged into `main`.

## 6. `.gitignore`

A `.gitignore` file is included to prevent unnecessary or generated
files from being tracked by Git.

Example:

``` gitignore
# Dependencies
node_modules/

# Environment files
.env
.env.*

# Logs
*.log

# OS files
.DS_Store
Thumbs.db

# IDE files
.vscode/
.idea/

# Temporary files
*.tmp
*.temp
```

The purpose of `.gitignore` is to keep unwanted, temporary,
environment-specific, or generated files out of the repository.

## 7. Git Tags

Git tags are used to mark important versions of the project.

Example:

``` bash
git tag -a v1.0.0 -m "Task 4 completed"
git push origin v1.0.0
```

Tags provide a stable reference to a particular version of the project.

To view tags:

``` bash
git tag
```

## 8. Git Stash

`git stash` can temporarily save uncommitted changes when switching
branches.

Example:

``` bash
git stash
git checkout dev
git checkout feature/project-enhancement
git stash pop
```

Useful commands:

``` bash
git stash
git stash list
git stash pop
```

## 9. Merge Conflict Resolution

If two branches modify the same part of a file, Git may report a merge
conflict.

The general process is:

``` bash
git pull
git status
```

Open the conflicted file and resolve the conflict markers:

``` text
<<<<<<< HEAD
current branch changes
=======
incoming branch changes
>>>>>>> other-branch
```

After resolving the conflict:

``` bash
git add .
git commit -m "fix: resolve merge conflict"
git push
```

## 10. Useful Git Commands Used

### Check repository status

``` bash
git status
```

### Show current branch

``` bash
git branch --show-current
```

### List branches

``` bash
git branch
```

### Create a branch

``` bash
git checkout -b branch-name
```

### Switch branches

``` bash
git checkout branch-name
```

### Add changes

``` bash
git add .
```

### Commit changes

``` bash
git commit -m "commit message"
```

### Push a branch

``` bash
git push -u origin branch-name
```

### View commit history

``` bash
git log --oneline --decorate --max-count=5
```

### View remote repositories

``` bash
git remote -v
```

## 11. Git Workflow Demonstrated

The completed workflow follows:

``` text
Developer
   │
   ▼
Feature Branch
   │
   │ Develop & Commit
   ▼
GitHub
   │
   │ Pull Request
   ▼
Dev Branch
   │
   │ Integration & Testing
   ▼
GitHub
   │
   │ Pull Request
   ▼
Main Branch
   │
   ▼
Production-Ready Code
```

## 12. Verification

The repository was verified with:

``` bash
git status
git branch --show-current
git log --oneline --decorate --max-count=5
```

Example clean working tree:

``` text
On branch feature/project-enhancement
Your branch is up to date with 'origin/feature/project-enhancement'.

nothing to commit, working tree clean
```

The project contains the required branch structure:

``` text
main
dev
feature/project-enhancement
```

## 13. Task Completion Checklist

-   [x] Git repository initialized
-   [x] Project committed to Git
-   [x] GitHub repository created
-   [x] `main` branch created and pushed
-   [x] `dev` branch created and pushed
-   [x] `feature/project-enhancement` branch created and pushed
-   [x] Feature enhancement added to the web application
-   [x] Feature changes committed
-   [x] `.gitignore` included
-   [x] Git tagging demonstrated
-   [x] Git stash demonstrated
-   [x] Merge conflict resolution documented
-   [x] Pull Request workflow documented
-   [x] README documentation created

## 14. Interview Questions

### What is Git?

Git is a distributed version control system used to track changes in
source code and collaborate with other developers.

### What is the difference between merge and rebase?

`merge` combines the histories of two branches and creates a merge
commit when necessary.

`rebase` moves or reapplies commits onto another base commit and creates
a more linear project history.

### What is a Pull Request?

A Pull Request is a GitHub mechanism for proposing changes from one
branch to another so that the changes can be reviewed and discussed
before merging.

### How do you resolve a Git conflict?

A conflict is resolved by opening the affected files, choosing the
correct changes, removing the conflict markers, staging the resolved
files, and committing the resolution.

### What are Git tags?

Git tags are references used to mark specific commits, commonly for
releases or important project versions.

### What is a Git workflow?

A Git workflow defines how developers create branches, develop features,
review changes, merge branches, and release stable code.

### What is `git stash`?

`git stash` temporarily stores uncommitted changes so the working
directory can be cleaned while switching branches or performing another
Git operation.

### What is `.gitignore`?

`.gitignore` specifies files and directories that Git should not track,
such as environment files, dependencies, logs, and temporary files.

## 16. Outcome

This project demonstrates practical Git and GitHub version-control
practices for a DevOps project, including repository management,
branching, feature development, pull requests, version tagging, ignoring
unnecessary files, and documenting the complete workflow.

## Submission

GitHub Repository:

``` text
https://github.com/Workwithaditya01/Github-Task4
```

Replace the placeholder above with the actual GitHub repository URL
before submission.
