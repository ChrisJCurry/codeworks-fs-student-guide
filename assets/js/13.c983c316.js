(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{372:function(e,t,a){"use strict";a.r(t);var s=a(25),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"git-101"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-101"}},[e._v("#")]),e._v(" GIT 101")]),e._v(" "),a("h2",{attrs:{id:"what-is-git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-git"}},[e._v("#")]),e._v(" What Is Git?")]),e._v(" "),a("p",[e._v("Git is an Open Source Distributed Version Control System. Now if this is your first exposure that’s a lot of potentially unfamiliar words to define Git.")]),e._v(" "),a("p",[e._v("Let me break it down and explain the wording:")]),e._v(" "),a("ul",[a("li",[a("p",[a("em",[e._v("Control System")]),e._v(": This basically means that Git is a content tracker. So Git can be used to store content — it is mostly used to store code due to the other features it provides.")])]),e._v(" "),a("li",[a("p",[a("em",[e._v("Version Control System")]),e._v(": The code which is stored in Git keeps changing as more code is added. Also, many developers can add code in parallel. So Version Control System helps in handling this by maintaining a history of what changes have happened. Also, Git provides features like branches and merges, which I will be covering later.")])]),e._v(" "),a("li",[a("p",[a("em",[e._v("Distributed Version Control System")]),e._v(": Git has a remote repository which is stored in a server and a local repository which is stored in the computer of each developer. This means that the code is not just stored in a central server, but the full copy of the code is present in all the developers’ computers. Git is a Distributed Version Control System since the code is present in every developer’s computer. I will explain the concept of remote and local repositories later in this article.")])])]),e._v(" "),a("h2",{attrs:{id:"why-use-git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-use-git"}},[e._v("#")]),e._v(" Why use Git")]),e._v(" "),a("p",[e._v("Real life projects generally have multiple developers working in parallel. So a version control system like Git is needed to ensure there are no code conflicts between the developers.")]),e._v(" "),a("p",[e._v("Additionally, the requirements in such projects change often. So a version control system allows developers to revert and go back to an older version of the code.")]),e._v(" "),a("p",[e._v("Finally, sometimes several projects which are being run in parallel involve the same codebase. In such a case, the concept of branching in Git is very important.")]),e._v(" "),a("h2",{attrs:{id:"using-git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-git"}},[e._v("#")]),e._v(" Using Git")]),e._v(" "),a("p",[e._v("Rather than mentioning all the concepts at once, I will explain the concepts of Git through an example so that it is easier to follow.")]),e._v(" "),a("h3",{attrs:{id:"download-git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download-git"}},[e._v("#")]),e._v(" Download git")]),e._v(" "),a("p",[e._v("This link has details on how to install Git in multiple operating systems:\nhttps://git-scm.com/book/en/v2/Getting-Started-Installing-Git")]),e._v(" "),a("p",[e._v("Verify if Git is installed by using the following command in the command prompt:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git --version\n")])])]),a("h3",{attrs:{id:"create-your-local-git-repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-your-local-git-repository"}},[e._v("#")]),e._v(" Create your local Git repository")]),e._v(" "),a("p",[e._v("In your computer, create a folder for your project. Let’s call the project folder simple-git-demo.")]),e._v(" "),a("p",[e._v("Go into your project folder and add a local Git repository to the project using the following commands:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd simple-git-demo\ngit init\n")])])]),a("p",[e._v("The git init command adds a local Git repository to the project.")]),e._v(" "),a("h3",{attrs:{id:"let-s-add-some-small-code-now"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#let-s-add-some-small-code-now"}},[e._v("#")]),e._v(" Let’s Add some Small Code now")]),e._v(" "),a("p",[e._v("Create a file called demo.txt in the project folder and add the following text into it:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Initial Content\n")])])]),a("p",[e._v("Here we will be demoing with just plain text instead of actual code, since the main focus of this article is on Git and not on any specific programming language.")]),e._v(" "),a("h3",{attrs:{id:"staging-and-committing-the-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#staging-and-committing-the-code"}},[e._v("#")]),e._v(" Staging and Committing the code")]),e._v(" "),a("p",[e._v("Committing is the process in which the code is added to the local repository. Before committing the code, it has to be in the staging area. The staging area is there to keep track of all the files which are to be committed.")]),e._v(" "),a("p",[e._v("Any file which is not added to the staging area will not be committed. This gives the developer control over which files need to be committed.")]),e._v(" "),a("h2",{attrs:{id:"staging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#staging"}},[e._v("#")]),e._v(" Staging")]),e._v(" "),a("p",[e._v("Use the following command for staging the file:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git add demo.txt\n")])])]),a("p",[e._v("In case you want to add multiple files you can use:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git add file1 file2 file3\n")])])]),a("p",[e._v("If you want to add all the files inside your project folder to the staging area, use the following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git add .\n")])])]),a("p",[e._v("Use this carefully since it adds all the files and folders in your project to the staging area.")]),e._v(" "),a("h2",{attrs:{id:"committing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#committing"}},[e._v("#")]),e._v(" Committing")]),e._v(" "),a("p",[e._v("Use the following command to commit the file:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('git commit -m "Initial Commit"\n')])])]),a("p",[e._v("“Initial Commit” is the commit message here. Enter a relevant commit message to indicate what code changes were done in that particular commit.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Git Status and Git Log\n")])])]),a("p",[e._v("Now modify the demo.txt file and add the following:\n"),a("code",[e._v('"Initial Content Adding more Content"')])]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("Use git status to find out information regarding what files are modified and what files are there in the staging area — it shows other information as well, which we can ignore for now.")]),e._v(" "),a("p",[e._v("Use the following command to see the status:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git status\n")])])]),a("p",[e._v("The status shows that demo.txt is modified and is not yet in the staging area.")]),e._v(" "),a("p",[e._v("Now let us add demo.txt to the staging area and commit it using the following commands:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('git add demo.txt git commit -m "demo.txt file is modified"\n')])])]),a("h2",{attrs:{id:"log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log"}},[e._v("#")]),e._v(" Log")]),e._v(" "),a("p",[e._v("Use git log to print out all the commits which have been done up until now.")]),e._v(" "),a("p",[e._v("The command used for this is:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git log\n")])])]),a("p",[e._v("The log shows the author of each commit, the date of the commit, and the commit message.")]),e._v(" "),a("h2",{attrs:{id:"branches"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#branches"}},[e._v("#")]),e._v(" Branches")]),e._v(" "),a("p",[e._v("Up until now we have not created any branch in Git. By default, Git commits go into the master branch.")]),e._v(" "),a("p",[e._v("What is a branch?")]),e._v(" "),a("blockquote",[a("p",[e._v("A branch is nothing but a pointer to the latest commit in the Git repository. So currently our master branch is a pointer to the second commit “demo.txt file is modified”.")])]),e._v(" "),a("p",[e._v("Why are multiple branches needed?")]),e._v(" "),a("blockquote",[a("p",[e._v("Multiple branches are needed to support multiple parallel developments. Refer the image below to see how branches work.")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-media-1.freecodecamp.org/images/sww3mboJ61C4kpLWlQYHnHWvrjX8p--VMui2",alt:'"branching image"'}})]),e._v(" "),a("p",[e._v("Initially, commit 1 and commit 2 were done in the master branch. After commit 2 a new Branch called as “Test” is created, and commit 3 and commit 4 are added to the test branch.")]),e._v(" "),a("p",[e._v("At the same time, a different commit 3 and commit 4 are added to the master branch. Here we can see that after Commit 2, two parallel developments are being done in 2 separate branches.")]),e._v(" "),a("p",[e._v("The Test Branch and the Master Branch have diverged here and have different code — the code from Test Branch can be merged with the Master branch using git merge. This will be covered later.")]),e._v(" "),a("h3",{attrs:{id:"create-a-new-branch-in-local"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-branch-in-local"}},[e._v("#")]),e._v(" Create a New Branch in Local")]),e._v(" "),a("p",[e._v("Create a new branch called test using the following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git branch test\n")])])]),a("p",[e._v("This command creates the "),a("code",[e._v("test")]),e._v(" branch.")]),e._v(" "),a("p",[e._v("We are still in the context of the master branch. In order to switch to the "),a("code",[e._v("test")]),e._v(" branch. use the following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git checkout test\n")])])]),a("p",[e._v("Now we are in the "),a("code",[e._v("test")]),e._v(" branch.")]),e._v(" "),a("p",[e._v("You can list out all the branches in local using the following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git branch\n")])])]),a("h3",{attrs:{id:"do-some-commits-in-the-new-branch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#do-some-commits-in-the-new-branch"}},[e._v("#")]),e._v(" Do Some Commits in the New Branch")]),e._v(" "),a("p",[e._v("Modify "),a("code",[e._v("demo.txt")]),e._v(" by adding the following snippet:")]),e._v(" "),a("p",[a("code",[e._v('"Initial Content Adding more Content Adding some Content from test Branch"')])]),e._v(" "),a("p",[e._v("Now stage and commit using the following commands:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('git add demo.txt git commit -m "Test Branch Commit"\n')])])]),a("p",[e._v("This commit was done in the Test Branch, and now Test Branch is ahead of Master Branch by 1 commit — as the test branch also includes the 2 commits from the master branch.")]),e._v(" "),a("p",[e._v("You can verify the commit history in Test Branch using:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git log\n")])])]),a("h3",{attrs:{id:"merging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#merging"}},[e._v("#")]),e._v(" Merging")]),e._v(" "),a("p",[e._v("Currently, Test Branch is ahead of the Master by 1 commit. Let’s say that now we want all the code in the Test Branch to be brought back to the Master Branch. This is where "),a("code",[e._v("git merge")]),e._v(" is very useful.")]),e._v(" "),a("p",[e._v("In order to merge the code from the test branch into the master branch, follow these steps:")]),e._v(" "),a("p",[e._v("First go back to the master branch:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git checkout master\n")])])]),a("p",[e._v("Then run the merge command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git merge test\n")])])]),a("p",[e._v("After running these 2 commands, the merge should be successful. In this example, there are no conflicts.")]),e._v(" "),a("p",[e._v("But in real projects, there will be conflicts when a merge is being done. Resolving the conflict is something which comes with experience, so as you work more with Git you will be able to get the hang of resolving conflicts.")]),e._v(" "),a("p",[e._v("Run "),a("code",[e._v("git log")]),e._v(" now and you will notice that the master also has 3 commits.")]),e._v(" "),a("h2",{attrs:{id:"the-remote-git-repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-remote-git-repository"}},[e._v("#")]),e._v(" The Remote Git Repository")]),e._v(" "),a("p",[e._v("Until now, we have been working only in the local repository. Each developer will work in their local repository but eventually, they will push the code into a remote repository. Once the code is in the remote repository, other developers can see and modify that code.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-media-1.freecodecamp.org/images/O-6UdGYVsEjM-oJmtJ5KQpQnXIBOCZoB22X1",alt:"Showing Remote and Local Repositories"}})]),e._v(" "),a("h2",{attrs:{id:"github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github"}},[e._v("#")]),e._v(" GitHub")]),e._v(" "),a("p",[e._v("Here we will be using GitHub for the remote repository.")]),e._v(" "),a("p",[e._v("Go to https://github.com/ and create an account.")]),e._v(" "),a("p",[e._v("After registering in the GitHub homepage, click on  the green "),a("strong",[e._v("New")]),e._v(" button to create a new Git repository. Give the repository a name and click “Create Repository”")]),e._v(" "),a("p",[e._v("Give the name as "),a("code",[e._v("git-blog-demo")]),e._v(".")]),e._v(" "),a("p",[e._v("This will create a remote repository in GitHub, and when you open the repository, a page like the image below will open up:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-media-1.freecodecamp.org/images/LWpWCg5LTo7m-IkZW1io-194VWZ61di5CIGY",alt:'"git quick setup"'}})]),e._v(" "),a("p",[e._v("The repository URL is the highlighted portion "),a("code",[e._v("https://github.com/YOURUSERNAME/git-blog-demo.git")])]),e._v(" "),a("p",[e._v("In order to point your local repository to the remote repository, use the following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git remote add origin [repository url]\n")])])]),a("h2",{attrs:{id:"git-push"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-push"}},[e._v("#")]),e._v(" Git Push")]),e._v(" "),a("p",[e._v("In order to push all the code from the local repository into the remote repository, use the following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git push -u origin master\n")])])]),a("p",[e._v("This pushes the code from the master branch in the local repository to the master branch in the remote repository.")]),e._v(" "),a("h2",{attrs:{id:"git-pull"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-pull"}},[e._v("#")]),e._v(" Git Pull")]),e._v(" "),a("p",[e._v("git pull is used to pull the latest changes from the remote repository into the local repository. The remote repository code is updated continuously by various developers, hence git pull is necessary:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git pull origin master\n")])])]),a("h2",{attrs:{id:"git-clone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-clone"}},[e._v("#")]),e._v(" Git Clone")]),e._v(" "),a("p",[e._v("git clone is used to clone an existing remote repository into your computer. The command for this is:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git clone [repository url]\n")])])]),a("p",[e._v("Congrats\nNow you know the basics of how to use Git!")]),e._v(" "),a("p",[e._v("For more practice with github, check out "),a("a",{attrs:{href:"https://guides.github.com/activities/hello-world/",target:"_blank",rel:"noopener noreferrer"}},[e._v("this tutorial from github"),a("OutboundLink")],1),e._v(" "),a("br"),e._v(" "),a("br")]),a("hr"),e._v(" "),a("small",[e._v("Citation: Sridhar, Aditya. “An Introduction to Git: What It Is, and How to Use It.” FreeCodeCamp.org, FreeCodeCamp.org, 21 Oct. 2019, www.freecodecamp.org/news/what-is-git-and-how-to-use-it-c341b049ae61/ ")]),e._v(" "),a("br"),a("p")])}),[],!1,null,null,null);t.default=o.exports}}]);