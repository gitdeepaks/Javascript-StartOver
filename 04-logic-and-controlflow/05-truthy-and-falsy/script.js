
// const email = 'test@test.com';


// if (email) {
//     console.log('You have an email')
// }

// console.log(Boolean(email))

const x = 0;

if (x) {
    console.log('this is truthy')
} else {
    console.log('this is falsy')
}

console.log(Boolean(x))


//Truthy and falsy caveats

const children = 2;

if (!isNaN(children)) {
    console.log(`You have ${children} children`)
} else {
    console.log('Please enther the number of children')
}

//checking fior empty array

const posts = ['Posts One', 'Posts Two', 'Posts Three'];

if (posts.length > 0) {
    console.log('List of posts')
} else {
    console.log('No posts to list')
}

//cheking for empty objects

const user = {
    name: 'Brad',

};

if (Object.keys(user).length > 0) {
    console.log('list user')
} else {
    console.log('no user')
}


//Loosy Quality(==)
console.log(false == 0);
console.log('' == 0);
console.log(null == undefined);

//Strict checking(===)
console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);

