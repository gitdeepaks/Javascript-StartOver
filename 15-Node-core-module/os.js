const os = require("os");

// arch()

console.log(os.arch());

// platform ()

console.log(os.platform());

if (os.platform() === "darwin") {
  console.log("Yor are in Mac");
} else if (os.platform() === "win32") {
  console.log("you are on Windows");
} else {
  console.log("Linux");
}

// cpus()

console.log(os.cpus());

// freemem()

console.log(os.freemem());

console.log(`Free Memory: ${os.freemem() / 1024 / 1024 / 1024} GB`);

// total memory

console.log(os.totalmem());
console.log(`Total Memory: ${os.totalmem() / 1024 / 1024 / 1024} GB`);

// homedir ()

console.log(os.homedir());

// uptime ()

console.log(os.uptime());

const uptime = os.uptime();

const days = Math.floor(uptime / 60 / 60 / 24);
const hrs = Math.floor(uptime / 60 / 60) % 24;
const min = Math.floor(uptime / 60) % 60;
const sec = Math.floor(uptime) % 60;

console.log(`uptime: ${days}:${hrs}:${min}:${sec}`);

// hostname()

console.log(os.hostname());
