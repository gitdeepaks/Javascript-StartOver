# Setting Up Git & GitHub

Git is a version control systems that is used to track changes in code. It is a very powerful tool that is very important to learn as a developer. It is used in many different ways, but we will be using it to track changes in our code as we build our shopping list app.

The basic workflow is:

1. Make changes to your code
2. Add the changes to the staging area
3. Commit the changes to the repository
4. Push the changes to GitHub (or something else like BitBucket)

## Installing Git

Git is a command line tool, so you will need to install it on your computer. You can download it from [git-scm.com](https://git-scm.com/). You can use the default settings when installing. If you are on a Mac, you can also install it using Homebrew.

If you are on Windows, you can also install Git Bash, which is a `bash` terminal that comes with Git. You can use this instead of the regular Windows command prompt.

## Init Git

Once you install Git, go to the project folder in your command line. VS Code has a built in terminal that you can use, which is what I prefer. Enter the following command:

```bash
git init
```

This creates a hidden `.git` folder in your project folder. This is where all of the Git information is stored.

## Add Files To Git

Now that we have Git initialized, we need to add the files we want to track to Git. We can do this by entering the following command:

```bash
git add .
```

The files are now in the staging area. We can see what files are in the staging area by entering the following command:

```bash
git status
```

## Commit Files

Now that we have the files in the staging area, we can commit them to the repository. We can do this by entering the following command:

```bash
git commit -m "Initial Commit"
```

The `-m` flag is used to add a message to the commit. This is a good practice to get into. It is a good idea to make your commit messages descriptive. This will help you and others understand what changes were made in the commit.

Call it `shopping-list` or whatever you'd like.

## Setup SSH keys for GitHub

Now that we have a remote repo, we need to add an SSH key to GitHub. This will allow us to push our code to GitHub. We can do this by entering the following command:

```bash
ssh-keygen -t rsa -b 4096 -C "
```

This will create a new SSH key. You can press enter to accept the default file location and the default name of `id_rsa` or you can type in a custom name and location. I like to name my key files for the service I am using it for, so I would do something like

```bash
/Users/brad/ssh/id_rsa_github
```

You will then be prompted to enter a passphrase. You can leave this blank by pressing enter.

This will create a private key file and a public key file. The public key file will have the same name as the private key file, but with `.pub` at the end. You can view the contents of the public key file by entering the following command:

```bash
cat ~/.ssh/id_rsa_github.pub
```

## Adding the SSH Key to GitHub

Copy the contents of the public key file. Then go to your GitHub account and click on your profile picture in the top right corner. Then click `Settings`. Then click `SSH and GPG keys`. Then click `New SSH key`. Give it a title and paste the contents of the public key file into the `Key` field. Then click `Add SSH key`.

## Push To GitHub

Next, we need to setup a remote repo at GitHub. We can do this by going to [github.com](https://github.com) and creating a new repository. Login and click the `+` icon in the top right corner. Then click `New repository`. Give it a name and click `Create repository`.

Now that we have a remote repo, we need to push our files to it. Start copying the `git remote` command that you see on the repo page

```bash
git remote add origin YOUR_REMOTE_REPO_URL
```

Then specify the branch you want to push to, We will use the main branch.

```bash
git branch -M main
```

Finally, push the files to the remote repo.

```bash
git push -u origin main
```

Now, you should see your files in the remote repo.

## Updating the remote repo

Anytime you update your code and you want to push to github, you simply add the files to the staging area, commit them, and push them to the remote repo.

Let's cerate a readme file called readme.md. Add the following to the readme file:

```md
# Shopping List App

This is a shopping list app that I created using HTML, CSS, and JavaScript.
```

This is a `markdown` file. You can learn more about markdown [here](https://www.markdownguide.org/).

Now push to your remote repo:

```bash
git add .
git commit -m "Update"
git push
```

The readme file contents will show up on the repo page.
