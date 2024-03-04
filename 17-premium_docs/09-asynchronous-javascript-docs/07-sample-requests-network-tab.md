# Sample HTTP Requests & The Network Tab

Okay, so I want to show you how to use the Network tab in your browser's developer tools. This is a really useful tool for debugging your code. It allows you to see what requests are being made to your server and what data is being sent back.

I'm going to use my own website as an example, so I'll go to https://traversymedia.com and go to the developer tools. I'll click on the Network tab and then refresh the page.

This will show us every single resource that was sent with the response from the `GET` request that was made to the server by the browser. You can see that there are a lot of resources here. There are images, CSS files, JavaScript files, and more. If you click on one of these, you can see the details of the request and response.

If I click on one of the resources such as one of the CSS files, we can see the status code is `200`, which means `success`. We can also see the size of the file, the type of file and much more. If I click on `response`, we can see the actual CSS file that was sent back to the browser.

## Getting Data

So that's how you can use the Network tab to see what resources are being sent back to the browser. Now, let's look at a data resource that we would typically use JavaScript to fetch data from. I'm going to use the GitHub API as an example.

In your browser, you can go to https://api.github.com/users/bradtraversy. This is the API endpoint for my GitHub profile.

The data will display right in the browser. I have a Chrome extension called **JSON Viewer** that makes it easier to read. If you don't have this extension, you can install it from the Chrome Web Store.

If we click on the Network tab and refresh the page, we can see that the request was made to the server and the response was sent back. If we click on the response, we can see the data that was sent back.

Ultimately, we would want to use JavaScript to fetch this data and use it within our project. We can do this with the `fetch API`. Before we get to fetch, I want to show you how we can do it using the `XMLHttpRequest` object. This will give us more opportunities to work with callbacks.
