# `path` Module

The `path` module is a core module that allows us to work with file and directory paths. It is used to get the base name of a file, get the extension of a file, create absolute paths, and much more. One big reason that this is useful is because the path separator, among other things can vary between operating systems. For example, on Windows, the path separator is `\` and on Linux and macOS, it is `/`. The `path` module will take care of this for us.

Let's look at some of the most common methods.

First, we need to bring the module in.

```js
const path = require('path');
```

Let's create a variable that holds the path to a file.

```js
const myFilePath = 'subfolder/anotherfolder/index.js';
```

## basename() - Getting the base name of a file

We use the `basename` method to get the base name of a file. The first argument is the path to the file. The second argument is the extension of the file. If we do not pass in the second argument, it will return the base name with the extension. If we pass in the second argument, it will remove the extension from the base name.

```js
const base1 = path.basename(myFilePath);
const base2 = path.basename(myFilePath, '.js');
console.log(base1, base2); // index.js index
```

## extname() - Getting the extension of a file

We use the `extname` method to get the extension of a file.

```js
const ext = path.extname(myFilePath);
console.log(ext); // .js
```

## dirname() - Getting the directory name of a file

We use the `dirname` method to get the directory name of a file.

```js
const dir = path.dirname(myFilePath);
console.log(dir);
```

## join() - Creating a path

We use the `join` method to create a path. It takes in any number of arguments and joins them together to create a path. It will also normalize the path. For example, if we pass in `subfolder`, `anotherfolder`, and `index.js`, it will join them together with the correct path separator and it will remove any extra path separators.

```js
const myPath = path.join('subfolder', 'anotherfolder', 'index.js');
console.log(myPath); // subfolder/anotherfolder/index.js
```

If you are on Windows, you will see that the path separator is `\`. If you are on Linux or macOS, you will see that the path separator is `/`.

## resolve() - Creating an absolute path

We use the `resolve` method to create an absolute path. It takes in any number of arguments and joins them together to create a path. It will also normalize the path, just like the `join` method. The difference is that the `resolve` method will return an absolute path.

```js
const resolved = path.resolve('subfolder', 'anotherfolder', 'index.js');
console.log(resolved);
```

You may see `resolve` and `join` used interchangeably. The difference is that `resolve` will always return an absolute path, while `join` will return a relative path if the first argument is a relative path.

The next two things we are going to look at are `__filename` and `__dirname`. These are environment variables that Node provides for us. They are not part of the `path` module, but they are often used with `path` module methods.

## \_\_dirname - Getting the directory name of the current file

The `__dirname` is an environment variable that tells you the absolute path of the directory containing the currently executing file. Whenever you are pointing to the file that you are in, you should use `__dirname` instead of `./`. This will ensure that your code will work on any operating system.

```js
console.log(__dirname);
```

## \_\_filename - Getting the file name of the current file

The `__filename` is an environment variable that is similar to the `__dirname` environment variable. It tells you the absolute path of the currently executing file as well as the file name.

```js
console.log(__filename);
```
