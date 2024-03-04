# Date Methods

There are a lot of useful methods that we can use on the Date object for getting information about the date. Let's create a new date object to work with. I will just use today's date, which is July 22, 2022.

```javascript
let d = new Date();
```

We already looked at a few methods such as toString() and getTime().

```javascript
// Convert the date to a string
d.toString();

// Get the time in milliseconds
d.getTime();
d.valueOf();
```

Let's look at some methods for getting specific parts of the date.

```javascript
// Get the year
d.getFullYear();

// Get the month number (0-11)
d.getMonth();
d.getMonth() + 1; // Actual month number

// Get the day of the month (1-31)
d.getDate();

// Get the day of the week (0-6)
d.getDay();
```

We also have methods for getting time values.

```javascript
// Get the hour (0-23)
d.getHours();
// Get the minute (0-59)
d.getMinutes();
// Get the second (0-59)
d.getSeconds();
// Get the millisecond (0-999)
d.getMilliseconds();
```

We can create create custom date using methods

```javascript
`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`; // 2022-7-22
```

### Intl.DateTimeFormat API

The Intl.DateTimeFormat API is a more modern and powerful way to format dates and times in a locale-sensitive way. It fixes some of the locale issues we can run into.

We can pass in a locale argument to the constructor to get a date formatted in a specific locale.

```javascript
new Intl.DateTimeFormat('en-US').format(d); // July 22, 2022
new Intl.DateTimeFormat('en-GB').format(d); // 22 July, 2022

// You can pass in 'default' to get your default locale
new Intl.DateTimeFormat('default').format(d); // July 22, 2022
```

By default, it will return a string in the above format, but we can specify what we want in the second argument. Let's say I just want the month name

```javascript
new Intl.DateTimeFormat('en-GB', { month: 'long' }).format(d); // July
```

### toLocaleString()

A shorter way to use this API is to use the toLocaleString() method. This is what I would usually recommend.

```javascript
d.toLocaleString('default', { month: 'long' }); // July
```

if we want more information:

```javascript
d.toLocaleString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'America/Los_Angeles',
}); // Friday, July 22, 2022 at 7:30:57 AM
```
