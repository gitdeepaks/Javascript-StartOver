const age = 19;

//using if statement

if (age >= 18) {
    console.log('you can vote')
} else {
    console.log('you cannot vote')
}


//Using ternaty opearator

age >= 18 ? console.log('you can vode') : console.log('yon can not vote');

//Assiging a contitional value to a variable

const canVote = age >= 18 ? true : false;
const canVotee = age >= 18 ? 'You can vote' : 'you can not vote';

console.log(canVote);
console.log(canVotee);


//multiple statement 

const auth = true;

// let redirect;

// if (auth) {
//     alert('welcom to the dashboard');
//     redirect = '/dashboard';

// } else {
//     alert('Access denied');
//     redirect = '/login';
// }

// const redirect = auth ? (alert('welcom to the page'), '/dashboard') : (alert('Access Denied'), '/login');


console.log(redirect)

auth ? console.log('Welcome to the Dashboard') : null;

auth && console.log('Welcome to the Dashboard');
