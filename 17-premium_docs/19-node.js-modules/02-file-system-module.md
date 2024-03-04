# `fs` Module

The `fs` module is a core module that allows us to interact with the file system. It is used to create, read, update, and delete files and folders. Obviously, from the browser environment, we cannot access the file system. However, we can use the `fs` module in Node.js.

There are methods for doing just about anything with files and folders. There are also asynchronous and synchronous versions of each method. The asynchronous versions are preferred because they do not block the execution of the program. The synchronous versions are useful when we need to wait for the operation to complete before continuing.

There is also a callback and promise version. For the callback, it is just require('fs') and for the promise version, it is require('fs/promises').

Let's look at some of the most common methods.

First, we need to bring the module in.

```js
const fs = require('fs');
```

## Creating a file

We use the `writeFile` method to create a file. The first argument is the path to the file. The second argument is the content of the file. The third argument is a callback function that will be called when the operation is complete.

```js
// Callback version
fs.writeFile('file.txt', 'Hello World', (err) => {
  if (err) throw err;
  console.log('File created!');
});
```

`writeFile` is asynchronous as it takes in a callback function to run when the operation is complete. If we want to use a promise instead, we can use the `writeFile` method from the `fs/promises` module.

```js
// Promise version
const fs = require('fs/promises');

fs.writeFile('file.txt', 'Hello World')
  .then(() => console.log('File created!'))
  .catch((err) => console.log(err));
```

We can also use async/await. Of course, it has to be wrapped in a function that is marked as `async`. Let's do that and let's pass in the name of the file and the content as arguments.

```js
// Async/Await version
async function createFile(filename, content) {
  try {
    await fs.writeFile(filename, content);
    console.log('File created!');
  } catch (err) {
    console.error(err);
  }
}

createFile('file.txt', 'Hello World');
```

Like I said, there is also a synchronous version of `writeFile`. It is called `writeFileSync`. It does not take in a callback function. Instead, it returns `undefined` if the operation is successful. If there is an error, it will throw an exception. Let's put this in a function as well

```js
function createFileSync(filename, content) {
  try {
    fs.writeFileSync('file.txt', 'Hello World');
    console.log('File created!');
  } catch (err) {
    console.error(err);
  }
}
```

For the rest of these examples, we will use the async/await version, because that is what I would use in a real application. it's completely up to you which version you use.

## Reading a file

To read from a file, we can use the `readFile` method. The first argument is the path to the file. The second argument is the encoding of the file. If you are using the standard callback version, the third argument is a callback function that will be called when the operation is complete. I will be using promises with Async/Await in the examples below.

```js
async function readFile(filename) {
  try {
    const data = await fs.readFile(filename, 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

readFile('file.txt');
```

## Delete a file

We can use the `unlink` method to delete a file.

```js
async function deleteFile(filename) {
  try {
    await fs.unlink(filename);
    console.log(`File ${filename} deleted!`);
  } catch (err) {
    console.error(err);
  }
}

deleteFile('file.txt');
```

## Rename a file

We can use the `rename` method to rename a file.

```js
async function renameFile(oldName, newName) {
  try {
    await fs.rename(oldName, newName);
    console.log(`File ${oldName} renamed to ${newName}!`);
  } catch (err) {
    console.error(err);
  }
}

renameFile('file.txt', 'new-file.txt');
```

## Create a folder

We can use the `mkdir` method to create a folder.

```js
async function createFolder(folderName) {
  try {
    await fs.mkdir(folderName);
    console.log(`Folder ${folderName} created!`);
  } catch (err) {
    console.error(err);
  }
}
```

## Move a file to a folder

We can use the `rename` method to move a file to a folder. I am using a couple methods from the `path` module to get the file name and to join the folder path and the file name. We will look at the path module in the next lesson.

```js
async function moveFileToFolder(filePath, folderPath) {
  try {
    const newFilePath = path.join(folderPath, path.basename(filePath));
    await fs.rename(filePath, newFilePath);
    console.log(`File ${filePath} moved to ${newFilePath}`);
  } catch (err) {
    console.error(err);
  }
}

moveFileToFolder('file.txt', 'folder');
```

There are many more methods to work with files and folders. To see the full list, check out the [Node.js documentation](https://nodejs.org/api/fs.html).
