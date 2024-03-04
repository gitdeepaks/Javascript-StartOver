# `os` Module

The `os` module is a core module that allows us to work with the operating system. It is used to get information about the operating system, get information about the user, and much more. One big reason that this is useful is because the operating system can vary between operating systems. For example, on Windows, the path separator is `\` and on Linux and macOS, it is `/`. The `os` module will take care of this for us. You also may want to have different functionality or content based on the operating system.

## `os.arch()`

This method returns a string identifying the operating system CPU architecture for which the Node.js binary was compiled. Possible values are `'arm'`, `'arm64'`, `'ia32'`, `'mips'`, `'mipsel'`, `'ppc'`, `'ppc64'`, `'s390'`, `'s390x'`, `'x32'`, and `'x64'`.

```js
const os = require('os');
```

```js
console.log(os.arch()); // x64
```

## `os.platform()`

This method returns a string identifying the operating system platform on which Node.js is running. Possible values are `'aix'`, `'darwin'`, `'freebsd'`, `'linux'`, `'openbsd'`, `'sunos'`, and `'win32'`.

```js
console.log(os.platform()); // darwin
```

## `os.cpus()`

This method returns an array of objects containing information about each logical CPU core.

```js
console.log(os.cpus()); // [ { model: 'Intel(R) Core(TM) i7-1068NG7 CPU @ 2.30GHz',
```

## `os.freemem()`

This method returns the amount of free system memory in bytes as an integer.

```js
console.log(os.freemem()); // 17179869184
```

To display in gigabytes, we can use the following code:

```js
console.log(`Free memory: ${os.freemem() / 1024 / 1024 / 1024} GB`);
```

## `os.totalmem()`

This method returns the total amount of system memory in bytes as an integer.

```js
console.log(os.totalmem()); // 17179869184
```

To display in gigabytes, we can use the following code:

```js
console.log(`Total memory: ${os.totalmem() / 1024 / 1024 / 1024} GB`);
```

## `os.homedir()`

This method returns the home directory of the current user as a string.

```js
console.log(os.homedir()); // /Users/username
```

## os.uptime()

This method returns the system uptime in seconds as an integer.

```js
console.log(os.uptime()); // 123456
```

Convert to days, hours, minutes, and seconds:

```js
const uptime = os.uptime();
const days = Math.floor(uptime / 60 / 60 / 24);
const hours = Math.floor(uptime / 60 / 60) % 24;
const minutes = Math.floor(uptime / 60) % 60;
const seconds = Math.floor(uptime) % 60;

console.log(
  'Uptime: ',
  `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
);
```

## `os.hostname()`

This method returns the hostname of the operating system as a string.

```js
console.log(os.hostname()); // hostname
```

## `os.networkInterfaces()`

This method returns an object containing network interfaces that have been assigned a network address.

```js
console.log(os.networkInterfaces());
```
