# Tracalorie Webpack Refactor

Now we are going to take the Tracalorie project, which is just a bunch of classes in a single file, and refactor it to use Webpack. We're going to use the `webpack-starter` boilerplate. I will include it in this lesson, if you don't have it already. You will also need the `tracalorie` project so we can copy the files and code over to the webpack project. I will include that as well.

## Set Up Files

Copy the `webpack-starter` boilerplate and rename it to `tracalorie-webpack`. Open the `package.json` and change the name to `tracalorie-webpack`. You can also change the description and change `main` from `index.js` to `app.js`. This is optional, but it is a convention that I like. Especially, where this is where the `App` class is going to be.

Change the `entry` field in the `webpack.config.js` from `./src/index.js` to `./src/app.js`.

Delete the `message.js` file if it's there. That was just created to show you how modules work. You can remove everything in the `app.js` file as well.

## Bring Over Assets & HTML

In the `src` folder, create a `css` folder. Bring over the following stylesheets from the Tracalorie project:

- style.css
- bootstrap.css

We will be installing `bootstrap` and `fontawesome` using NPM, so we don't need to bring over the `fontawesome.css` file. We do want the `bootstrap.css` because it is a customized theme.

Bring over the `webfonts` folder into the `src` folder as well.

Copy everything from the `index.html` file and paste it into the `index.html` file in the `src` folder. We need to make some changes here though.

Delete all of these lines from the `<head>`:

```html
<link rel="stylesheet" href="css/fontawesome.css" />
<link rel="stylesheet" href="css/bootstrap.css" />
<link rel="stylesheet" href="css/style.css" />
<script src="js/bootstrap.bundle.min.js" defer></script>
<script src="js/app.js" defer></script>
```

We don't need to include the app.js because now that we are using Webpack along with the HTMLWebpackPlugin, it will automatically include the `app.js` file for us. We don't need the stylesheet links because we will be importing our styles. Since we are going to install Bootstrap, we do not need the `bootstrap.bundle.min.js` file either.

Paste the everything in from the `<body>`. Make sure there are no hardcoded dummy meals or workouts in the HTML.

## Install Bootstrap & Fontawesome

Now we need to install Bootstrap and Fontawesome. We will be using the `bootstrap` and `@fortawesome/fontawesome-free` packages. Install them using NPM:

```bash
npm install bootstrap @fortawesome/fontawesome-free
```

Now open your `app.js` file and add the following imports:

```js
import '@fortawesome/fontawesome-free/js/all.js';
import { Modal, Collapse } from 'bootstrap';
import './css/bootstrap.css';
import './css/style.css';
```

We need to bring in the `Modal` and `Collapse` classes from Bootstrap in order to use them in our JavaScript.

## Create The CalorieTracker class

Create a file named `CalorieTracker.js` in the `src` folder. Copy the `CalorieTracker` class from the Tracalorie project and paste it into the `CalorieTracker.js` file.

At the end of the file, export the class with the following line:

```js
export default CalorieTracker;
```

## Create The Meal & Workout Classes

Since the Meal and Workout classes are so simple, let's put the in a single file. Create a file called Items.js in the `src` folder. Copy the `Meal` and `Workout` classes from the Tracalorie project and paste them into the `Items.js` file and export them like this:

```js
export { Meal, Workout };
```

## Create The Storage Class

Create a file called `Storage.js` in the `src` folder. Copy the `Storage` class from the Tracalorie project and paste it into the `Storage.js` file. Export the class like this:

```js
export default Storage;
```

## Import Storage Into CalorieTracker

The Storage class is only used in the tracker, so import it at the top of `CalorieTracker.js` like this:

```js
import Storage from './Storage';
```

## Import CalorieTracker & Items Into App

In the `src/app.js` folder, import the `CalorieTracker` and `Items` classes like this:

```js
import CalorieTracker from './CalorieTracker';
import { Meal, Workout } from './Items';
```

## Create The App Class

Now copy the entire App class to the `src/app.js` file. Also, instantiate the App class:

```js
const app = new App();
```

## Run The Server

Now we should be all set to run the Webpack dev server. Run the following command:

```bash
npm run dev
```

## Use The UUID Package

Instead of using hex values for the item IDs, let's use the `uuid` package. Install it using NPM:

```bash
npm install uuid
```

Now, in the `Items.js` file, import the `uuid` package like this:

```js
import { v4 as uuidv4 } from 'uuid';
```

Then, in the `Meal` and `Workout` classes, replace the `id` property with the following:

```js
this.id = uuidv4();
```

This is a great example of how you can use packages to add functionality to your projects.

That's it, now you have a modern, modularized project using Webpack. This makes our app more scalable and easier to maintain.
