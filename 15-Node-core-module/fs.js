// const fs = require("fs");
// // const fs = require("fs/promises");

// // Write to a file

// // Callback version
// // fs.writeFile("file1.txt", "hello world", (err) => {
// //   if (err) throw err;
// //   console.log("File Created");
// // });
// // Promise version

// // fs.writeFile("file2.txt", "hello world")
// //   .then(() => {
// //     console.log("file2.txt created");
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// //   sync Version

// fs.writeFileSync("file3.txt", "hello world3");
// console.log("File Created");

// Asyc Await

const fs = require("fs").promises;

async function createFile(filename, content) {
  try {
    await fs.writeFile(filename, content);
    console.log("file created");
  } catch (error) {
    console.log(error);
  }
}

// Read from a fille

async function readFile(filename) {
  try {
    const data = await fs.readFile(filename, "utf8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// Delete a file

async function deleteFile(filename) {
  try {
    await fs.unlink(filename);
    console.log(`file ${filename} deleted`);
  } catch (error) {
    console.log(error);
  }
}

// deleteFile("file4.txt");

// readFile("file1.txt");
// readFile("file2.txt");
// readFile("file3.txt");
// createFile("file4.txt", "hello world 4");

// Rename file "file1.txt" to "

async function renameFile(oldName, newName) {
  try {
    await fs.rename(oldName, newName);
    console.log(`${oldName} to ${newName} renamed`);
  } catch (error) {
    console.log(error);
  }
}

// renameFile("file1.txt", "hello-world.txt");

// create a folder

async function createFolder(folderName) {
  try {
    await fs.mkdir(folderName);
    console.log(`Folerating ${folderName} created`);
  } catch (error) {
    console.log(error);
  }
}

// createFolder("foled1");
