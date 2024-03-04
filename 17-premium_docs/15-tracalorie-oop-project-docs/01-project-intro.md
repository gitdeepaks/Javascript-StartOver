# Tracalorie Project Intro

Now that you have an understanding of how OOP works, we are going to build a project that will help you understand how to use OOP in practice. We are going to build a calorie tracker app called Tracalorie. The app will allow users to add meals and workouts that will either add or remove (burn) calories from their total and track their calories. It is meant to be used as a daily tracker, but you could add to it and implement a schedule. Personally, I would not do that using client side local storage. It's just too much data. I would create a backend API and store the data in a database.

<img src="images/screen.png" width="600">

Let's look at the requirements for the app:

- Set a calorie limit
- Add meals and workouts
- Delete meals and workouts
- Filter meals and workouts
- Display total calories gain/loss
- A progress bar to visualize total calories gain/loss
- Display calories consumed and burned
- Reset calories and clear meals and workouts
- Use local storage to persist total calories, calorie limit, meals and workouts
- Use Bootstrap for styling and UI components (Modal & Collapse)

We will be using ES6 classes for this project. If you wanted to convert it to constructor functions and prototypes, that would not be difficult at all. I just prefer classes for something like this.
