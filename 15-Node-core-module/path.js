const path = require("path");

const myFilePatj = "subfolder/anotherfolder/index.js";

const bas1 = path.basename(myFilePatj);
const bas2 = path.basename(myFilePatj, ".js");

console.log(base1);
console.log(base2);

// ext name

const ext = path.extname(myFilePatj);

console.log(ext);

// dirname()

const dir = path.dirname(myFilePatj);

console.log(dir);

join();

const myPath = path.join("subfolder", "anotherFloder", "index.js");

console.log(myPath);

// resolve()
const myPathw = path.resolve("subfolder", "anotherFloder", "index.js");

console.log(myPathw);

// __dirname
console.log(__dirname);

// __filename

console.log(__filename);
