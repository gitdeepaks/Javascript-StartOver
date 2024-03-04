## CSS & Style Loaders

In webpack, `loaders` are modules that transform the source code of an application as it's being bundled. They allow you to pre-process files as you include them in your application, and provide a means to transform code written in one language (such as TypeScript or CSS) into JavaScript that the browser can understand. You can also use loaders to use frameworks like React or Vue in your application.

## CSS & Style Loaders

We are going to use a loader to transform our CSS files and let us import them directly into our JavaScript. Let's install the `style-loader` and the `css-loader`. Run `npm install -D style-loader css-loader`.

After installing loaders, you need to configure them in the config file. Loaders are specified in the `module.rules` field of the config file. Each rule consists of a regular expression that determines which files the loader should be applied to, and an array of loaders to use.

```js
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
```

Here, we are saying that any file that ends with `.css` should be processed by the `style-loader` and the `css-loader`. The `style-loader` will add the CSS to the DOM by injecting a `<style>` tag, and the `css-loader` will interpret `@import` and `url()` like `import/require()` and will resolve them.

Now let's create a file at `src/css/style.css` and make the background of the page purple.

```css
body {
  background: purple;
  color: white;
}
```

Now, we should be able to simply import the CSS file into our JavaScript file. Let's import it into the `index.js` file.

```js
import './css/style.css';
```

Now, let's build again with `npm run build`. You should see a `bundle.js` file in the `dist` folder. If you open up the `index.html` file in the browser, you should see a purple background. We are now using the CSS loader to import our CSS file into our JavaScript file.

If you look at the `bundle.js` file, and search for `purple`, you will see that the CSS is now in the JavaScript file. This is because the `style-loader` injected the CSS into the DOM by injecting a `<style>` tag.
