# What is Unit Testing

In software development, we often write tests to test our code. This is especially true for really large projects that teams work on. Now, testing can be a little controversial because it's quite divisive. Some developers say that you always need to test your code, some say it's a waste of precious time. Of course, there is no right or wrong opinion, like most things, it comes down to the developer and the project. Either way, it's good to at least know the basics.

There's many different types of testing. There's unit testing, end-to-end testing, there's integration testing, etc. For the purposes of this course, we're going to be focusing on unit testing, which is one of, if not the most common type. It's also usually the first type of testing done on a project.

Unit testing is a way of testing individual pieces of code, called units. Usually the unit you're testing is a function. It is a method of testing where you write test scripts that check if the code is doing what it's supposed to do. For example, if you have a function that adds two numbers together, you would write a test that calls the function with the numbers 1 and 2 and checks that the output is 3. If the function passes the test, it is working correctly. If it fails, it means there is a problem that needs to be fixed.

## Jest

There are all kinds of testing libraries and frameworks, not just for JavaScript, but for any language. Many of them are similar, they just have a different syntax. We will be using a very popular framework called **Jest**. Jest is pretty easy to use, there isn't even any needed configuration. We can install it with NPM and then just start writing tests. Jest is also very popular, so there's a lot of documentation and tutorials out there, including my own.

This is a very simple example that tests a function called `sum()`. We use the test() function and add a description of what should happen. Then we pass in a callback with an expect function that gets the function that we're testing passed in and then we're using the toEqual() method to see if it equals 3. There's all kinds of methods you can use.

## Testing Algorithms

What we'll be doing is writing a test for each algorithm to make sure that we do it correctly and get the right output. I'm trying to kill two birds with one stone here and teach you basic unit testing as well as problem solving with algorithms. I think it's a good combination.

In the next video, we will get Jest installed and setup our files.
