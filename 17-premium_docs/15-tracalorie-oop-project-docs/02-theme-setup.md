# Theme Setup

For this project, we will be using a custom Bootstrap 5 theme that I created. We are not going to be typing out the HTML/CSS. I have included a folder called `tracalorie_theme` in the lesson files. It is also in the main GitHub repo in the `_theme` folder. You can find the final code at https://github.com/bradtraversy/tracalorie.

Take the theme folder and rename it to `tracalorie`. Open it up with `VS Code` and open `index.html` with the `Live Server` extension.

You should see the UI, alothough nothing will work, because there is no JavaScript. the only things that will work that are dynamic is the modal when you click 'Set Daily Limit' and the collapse form when you click 'Add Meal` or 'Add Workout'. That is because we are including the Bootstrap JavaScript bundle. The rest of the JavaScript will be written from scratch.

## Sass Files

If you do not plan on changing any styles of the theme, you can delete the `SCSS` folder as well as all of the Bootstrap css files except for `bootstrap.css`. If you want to customize the styling, then you can use a Sass compiler like `Live Sass Compiler` to compile the `SCSS` files to `CSS`.

Now, that we have our UI and theme setup, we can start working on the JavaScript.
