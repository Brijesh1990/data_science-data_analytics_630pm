# What Is GitHub, and How Do You Use It?

## What is GitHub?

GitHub is a website for storing and collaborating on files and software projects. It is especially popular for code, but you can use it for documents and other text-based files too.

GitHub is built around **Git**, a version control system:

- **Git** records changes to files over time on your computer.
- **GitHub** hosts Git repositories online so you can back them up, share them, and collaborate with others.

Think of a **repository** (or **repo**) as a project folder whose history Git tracks.

## Useful GitHub terms

- **Commit:** A saved snapshot of changes, usually with a short message explaining them.
- **Branch:** A separate line of work. You can make changes on a branch without changing the main version right away.
- **Push:** Send your local commits to GitHub.
- **Pull:** Bring changes from GitHub to your computer.
- **Pull request (PR):** A proposal to merge changes from one branch into another. Teammates can review and discuss it first.
- **Issue:** A place to report a bug, ask a question, or track a task.
- **README:** The project’s introduction, often explaining what it does and how to use it.

## Getting started on the website

1. Create an account at [github.com](https://github.com/).
2. Create a repository. Choose whether it should be **public** (anyone can view it) or **private** (only people you allow can view it).
3. Optionally add a README and a `.gitignore` file. A `.gitignore` tells Git which files not to track, such as generated files or local configuration.
4. Add files using **Add file** on the repository page, or upload an existing project.
5. Edit a file, enter a short commit message, and commit the change.

This is a good way to learn the basics without installing anything. Do not upload passwords, API keys, private data, or other secrets.

## Working with Git from your computer

Install Git, then open a terminal in your project folder. These commands create a local repository and save a first version:

```bash
git init
git add .
git commit -m "Add project files"
```

To connect it to a GitHub repository you already created, copy that repository’s URL from GitHub and run:

```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git branch -M main
git push -u origin main
```

Replace the example URL with your repository’s URL. GitHub may ask you to authenticate; follow its prompts rather than putting a password or token directly into commands or project files.

For later changes, a common routine is:

```bash
git status
git add path/to/changed-file
git commit -m "Describe the change"
git push
```

To get the latest changes from GitHub:

```bash
git pull
```

`git status` is useful for checking which files have changed and what Git is about to include.

## A simple collaboration workflow

1. Get a copy of the repository (clone it) or open it in GitHub Codespaces.
2. Create a branch for your task.
3. Make and test your changes.
4. Commit and push the branch.
5. Open a pull request on GitHub.
6. Review feedback, make any requested updates, and merge the pull request when it is ready.

For example, to create and switch to a branch:

```bash
git switch -c fix-typo
```

## GitHub without the command line

You can do many everyday tasks on the GitHub website: browse files, edit small changes, create issues, review pull requests, and manage project settings. **GitHub Desktop** provides a graphical app for common Git tasks if you would rather not use terminal commands.

# github commands for upload data on git repository

1. create account on github
2. create an repository on github 
3. upload data using git bash software 
# upload data via git bash software
# commands are 

1. git init
2. git add .
3. git commit -m "first commit"
4. git branch -M main
5. git remote add origin https://github.com/Brijesh1990/data_science-data_analytics_630pm.git
6. git push -u origin main

## One important distinction

GitHub is not a replacement for understanding where your files are saved. A commit is saved in your local Git history; a push sends it to GitHub. If you need an online backup, make sure your changes have been pushed.