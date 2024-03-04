# What Is MongoDB?

Alright, so we have really reached a point in the course where this is totally optional and well beyond JavaScript fundamentals. However, if you're interested in becoming a full-stack developer, you'll need to know about databases. A database is technically and organized collection of data, but alot of times, we use the term "database", when talking about `database management systems`. An example of a database management system is `MongoDB` or `MySQL` or `PostgreSQL`. These work in different ways, but the goal is the same and that is to store and manage data. In our case, we need a place to store the ideas for our application/api. We're going to use `MongoDB`. 

Database systems can run and operate on a single file system or accross multiple nodes or clusters. There are also different types of databases that store and retrieve data in different ways. For instance a MySQL database uses tables and columns while MongoDB uses collections and documents.

MongoDB is a document database. It stores data in JSON-like documents. A Document Database is a type of NoSQL database, which means it does not use SQL to query data, so it's different than a relational database such as MySQL. There are pros and cons to every database including MongoDB, MySQL, Postgres and so on. NoSQL databases are typically faster and easier to scale than SQL databases. However, they are not as mature and do not have as many features as SQL databases. So it's really up to you as well as the project that you're working on to decide which database to use.

MongoDB is very popular in the JavaScript world. I think one of the reasons for that is because it is structured similarly to JavaScript objects. It's also very easy to get started with. You have probably heard of the `MERN` stack, which is a popular stack for building full-stack applications. `MERN` stands for MongoDB, Express, React, and Node. There is also the `MEAN` and `MEVN` stacks, where they use Angular or Vue instead of React.

## Collections & Documents

MongoDB stores data in collections and documents. A collection is a group of documents. A document is a set of key-value pairs. It's essentially JSON. It's actually something called BSON, which is a superset of JSON.  If you're familiar with relational databases like MySQL, you can think of a collection as a table and a document as a row or record. This could be an example of a document in a users collection.

```json
{
  "name": "John Doe",
  "email": "john@gmail.com",
  "password": "SOME_HASHED_PASSWORD"
}
```

## MongoDB Atlas

Another reason I like to use MongoDB is because they have an incredible cloud-hosted version called `Atlas`. So you don't even have to install MongoDB on your own server. It's simple to get started with. We are going to go through this process in the next video. It is absolutely free to get started. you get a small amount of storage and a small amount of bandwidth. However, if you want to scale up, you can do that as well.

## MongoDB Compass

Another tool that I like to use is called `MongoDB Compass`. It's a GUI for MongoDB. It's a free tool that you can use to view your data. It's very easy to use. You can also use it to import and export data. So, it's a very powerful tool. I'll show you how to get that setup as well.

## Mongoose

When it comes to integrating Mongo into your app or API that uses Node.js, there is a tool called `Mongoose` that is extremely powerful and very popular. It's a library that makes it easy to work with MongoDB. You create a `model` of your data and then you can use that model to create, read, update, and delete data from your database. You can also do things like validation and data sanitization. So, it's a very powerful tool. We'll be using Mongoose, but we'll just be scratching the surface of what it can do. Mongoose is installed using NPM.
