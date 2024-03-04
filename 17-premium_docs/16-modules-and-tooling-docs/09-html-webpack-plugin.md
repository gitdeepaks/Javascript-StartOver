# HTMLWebpackPlugin

So, the way that we have things right now, it's ok, but it's a very basic setup. We created the `index.html` file and we added a script tag to it. The issue with this is that we have this static HTML file, so if I were to share this code, I have to include the `dist` folder. So, what we're going to do is we're going to use the `HTMLWebpackPlugin` to generate the `index.html` file for us. This means that we don't have to worry about creating the `dist` folder. So, let's go ahead and install it.

```bash
npm i -D html-webpack-plugin
```

Then, we're going to import it into our `webpack.config.js` file.

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
```

Then, we're going to add it to the plugins array.

```js
plugins: [
  new HtmlWebpackPlugin({
    title: 'Webpack App'
    filename: 'index.html'
  })
]
```

Now, we should be able to delete the whole `dist` folder. It will be regenerated on build.

```bash
rm -rf dist
```

```bash
npm run build
```

Now the `dist` folder will be created with both the `bundle.js` and `index.html` files. If we open up the `index.html` file in the browser, we should see `Hello World` in the console. We are now using the `HTMLWebpackPlugin` to generate the `index.html` file for us.

The issue that we have now is if I add anything to the html file, such as an `<h1>`, it will go away when we build again. We fix this by adding a template. We add the template file to the `src` folder and then we add the template property to the `HTMLWebpackPlugin` and set it to the template file.

```js
plugins: [
  new HtmlWebpackPlugin({
    title: 'Webpack App'
    filename: 'index.html'
    template: './src/index.html'
  })
]
```

I'm using `index.html` as the name, but you could call it anything that you want (eg. template.html). Whatever we put in `src/index.html` will be in the `dist/index.html` file. So, let's go ahead and add some basic HTML and add an `<h1>` tag to the `src/index.html` file. We can also use values fom the `webpack.config.js` file in the template. So, let's go ahead and add the title to the `<title`> tag and the `<h1>` tag.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <h1><%= htmlWebpackPlugin.options.title %></h1>
  </body>
</html>
```

```bash
npm run build
```

Now, take a look at `dist/index.html`. You should see the title and the `<h1>` tag that we added to the `src/index.html` file. So now, we do not have to create a `dist` folder to share our code. We simply run `npm run build` and it creates the `dist` folder.

In the next lesson, we're going to install the `webpack-dev-server` to make development easier.
