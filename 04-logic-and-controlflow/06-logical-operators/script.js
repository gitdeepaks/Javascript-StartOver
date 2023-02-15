console.log(10 < 20 && 30 > 15 && 40 > 30)

console.log(10 > 20 || 30 > 15 || 40 > 30)

//&&-will return the first falsy value

let a;

a = 10 && 72 && 40;
a = 10 && 0 && 30;
a = 10 && '' && 30;

console.log(a)


const post = ['Post One', 'Post Two', 'Post Three']
post.length > 0 && console.log(post[0])


//|| -will return the the first truthy value 


let b;

b = 10 || 20;
b = 0 || 20;

b = 0 || null || '' || undefined;


console.log(b)




//?? =Returns the right side operand when the left is undefined or null


let c;

c = 10 ?? 20;


c = null ?? 20
c = null ?? 30
c = undefined ?? 30
c = 0 ?? 30;
c = '' ?? 30;
console.log(c)