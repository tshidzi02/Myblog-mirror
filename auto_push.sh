#!/bin/bash
# STUDY: The line above tells the system this is a Bash script.

# STUDY: Move into your project folder (replace with your actual path)
cd "C:/Users/Admin/OneDrive - Stellenbosch University/Documents/2025/Second Semester 2025/COMPUTER Science 343/MyBlog"

# STUDY: Add all changed files to the staging area
git add .

# STUDY: Make a commit with a timestamp as the message
git commit -m "Auto-commit on $(date)"

# STUDY: Push changes to your Git remote (origin = your GitLab/GitHub repo, main = branch name)
git push origin main
