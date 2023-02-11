let x;

let d = new Date()

x = d.toString()
x = d.getTime()
x = d.valueOf()

x = d.getFullYear()
x = d.getMonth()

x = d.getDay()
x = d.getMinutes()
x = d.getMilliseconds()


x = `${d.getHours()}:${d.getMinutes()}`

// API for date

x = Intl.DateTimeFormat('en-US').format(d)
x = Intl.DateTimeFormat('en-IN').format(d)
x = Intl.DateTimeFormat('default').format(d)

x = Intl.DateTimeFormat('default', { month: 'long' }).format(d)
x = Intl.DateTimeFormat('default', { month: 'short' }).format(d)

console.log(x)