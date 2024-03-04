# Deploy To Render

There are many ways to deploy a fullstack app. You could use cloud hosting with something like Linode or Digital Ocean. You could use a service like Heroku. We are going to use Render.com. Render is a service that allows you to deploy your app to the cloud and manage it. It is a great service for deploying fullstack apps. It is also free for small apps.

## Create a Render Account

To get started, just sign in with GitHub. You can also sign up with an email address, but I recommend using GitHub.

## Checklist

In order to deploy successfully, there are a few things you need to do.

1. Change the mode in `webpack.config.js` to `production`

2. In your API service, change the `api_url` from `http://localhost:5000/api/ideas` to `/api/ideas`

3. Add a proxy. In your `webpack.config.js` file, add a proxy to the `devServer` object:

```js
 devServer: {
    static: {
      directory: path.resolve(__dirname, '../public'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:5000',
    },

  },
```

This tells our devServer to use the proxy when it sees a request to `/api`. This is the same as if we were using a proxy like Nginx.

4. Build your app. Run `npm run build` to build your app.

5. Push your app to GitHub.

6. Add your environment variables to Render. In your Render dashboard, click on the `Environment` tab. Add the following environment variables:

MONGODB_URI - Your MongoDB connection string
NODE_ENV - production

7. Add your app to Render. Click on the `Add App` button. Select the GitHub repo that you pushed your app to. Select the branch you want to deploy. Click `Create App`.

Now you should be able to see your app running on Render. You can click on the `Open` button to see your app.
