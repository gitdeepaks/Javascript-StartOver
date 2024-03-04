# Deploy To Netlify

When it comes to hosting, you have many many choices, especially for a simple HTML, CSS and JavaScript application. There are many services that will even host your project for free up to a limit (traffic and users).

One of my favorite hosting providers for websites and front-end applications is [Netlify](https://www.netlify.com/). It is amazingly simple to deploy your project for free. I am not being sponsored by Netlify in any way. It is just a service that I use and recommend.

## Create a Netlify Account

If you don't already have a Netlify account, you can create one for free. You can use your GitHub account to sign up.

## Create a New Site

There are a few ways to push your project to the server. The easiest way is to simply push to GitHub, which I already showed you how to do. Then, you can connect your GitHub account to Netlify and it will automatically deploy your project.

Just click "Add new site" and select your GitHub project. After a few seconds, it will show you a congratulations message and your project will be live. You will have a strange URL, but you can easily add your own domain by following the instructions in the docs.

## Future deployments

When you make changes to your project, you can simply push to GitHub and Netlify will automatically deploy your project. By default, the `main` branch is used, but you can change that in the settings. Sometimes developers will use a `dev` branch for development and then merge to `main` when they are ready to deploy. Or they may have a branch named `deploy` or `production`. You can change the branch in the settings.

That's it!
