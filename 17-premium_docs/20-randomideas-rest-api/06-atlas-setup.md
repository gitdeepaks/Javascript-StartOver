# MongoDB Atlas Setup

Like I said in the last lesson, Atlas is the cloud version of MongoDB and it is incredibly popular and I would say much more popular than the on-premise version of MongoDB. So, we're going to go through the process of setting up an account and creating a cluster.

## Create an Account

Go to [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas) and click the `Try Free` button.

Fill out the form and click `Create Account`. You can also sign up with Google.

## Create an Organization

Once you log in, create an organization. You can name it whatever you want. I'm going to name mine `Traversy Media`.

## Create a Project

Now, create a project. I'm going to name mine `Node API`.

## Create a Database

Click on 'Build a Database' and select the "Shared" plan, which is 100% free. Keep the default selections, which includes AWS for the provider. You can name your cluster whatever you want. I'm going to name mine `node-api-cluster`. Click `Create Cluster`.

## Create a Database User

Add a username and password and click "create user"

## Whitelist Your IP Address

Choose "My Local Environment" and then click `Add IP Address`. This will add your current IP address to the whitelist. Click `Confirm`.

It may take a few minutes for your cluster to be created. Once it's created, you can click on 'Browse Collections' and then 'Add My Own Data'. Enter a database name. I just used 'ideas_db'. Also, and a collection name of 'ideas'.

Just a note, when you create new collections, you do not have to do it here, you can do it in your application.

You will be able to see all of your data from here. You can also edit data, however if you want to manage data directly from your application, I would suggest a tool called `MongoDB Compass`. We'll go over that a little later.

For now, let's go back to the Atlas dashboard/overview and click on `Connect`. Click on `Connect Your Application` and select `Node.js` from the dropdown. Copy the connection string and paste it anywhere for now. Mine looks like this

mongodb+srv://brad:<password>@node-api-cluster.4nsqdlb.mongodb.net/ideas_db?retryWrites=true&w=majority

Change `<password>` to your password and add whatever you named your database after the last slash. I called mine 'ideas_db'.

In the next lesson, we will connect to the database via our application.
