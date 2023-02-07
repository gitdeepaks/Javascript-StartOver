// let js = 'amazing';

// if (js === 'amazing') {
//     alert("JavaScript is fun")
// }


// console.log(40 + 8 + 23 - 10);
// //let, var, const

// let firstName = "Jonas"

// console.log(firstName);

//variables let, var, const
// let age = 30;
// age = 31;


// const birthyear = 1991;
// // birthyear = 1992 // not possible immutable varible

// // const job; //not possible



// var job = 'programmer'
// job = 'teacher'


// lastname = 'Sankhyan'
// console.log(lastname);


// //Math Opertators

// const now = 2037
// const ageDeepak = now - 1991
// const ageRitika = now - 1994
// console.log(ageDeepak, ageRitika);
// console.log(ageDeepak * 2, ageDeepak / 2, ageRitika ** 2);

// const forstname = 'Deepak';
// const lastNam = 'Sankhyan';

// console.log(forstname + lastNam);

// console.log(forstname + ' ' + lastNam);

// // assignment operator

// let x = 10 + 5;
// x += 10; // x = x + 10 = 25

// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1 

// x--;
// x--; // x
// console.log(x);

// // Comparison Operators

// console.log(ageDeepak > ageRitika); // 
// console.log(ageRitika >= 18);


// const isFullAge = ageRitika >= 18;

// console.log(now - 1991 > now - 2023);


// const now = 2037
// const ageDeepak = now - 1991
// const ageRitika = now - 1994

// console.log(now - 1991 > now - 2023);

// // console.log(25 - 10 - 5);

// let x, y;





// x = y = 25 - 10 - 5;
// console.log(y, y);

// const averageAge = (ageDeepak + ageRitika) / 2
// console.log(ageDeepak, ageRitika, averageAge);


// Strings

// const firstName = 'Deepak'
// const job = 'Developer'

// const birthYear = 1991;
// const year = 2037;

// const deepak = "I'm" + firstName + 'a' + (year - birthYear) + 'years Old';

// // console.log(deepak);

// const JonasNew = `i am ${firstName}, a ${year - birthYear} years Old ${job}` //ES6 features

// console.log(JonasNew);

// console.log(`Just a regular string...`);

// console.log('String  with \n\
// multiple \n\
// line');

// console.log(`String 
// Multiple
// line`);

//if Else 

// const age = 15;

// if (age >= 18) {
//     console.log('Ritika can start driving 🚘');
// } else {
//     console.log('not eligible to drive');
// }


// const birthYear = 1992;
// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);

//Type Conversions

// const inputYear = '1992';
// console.log(inputYear);

// console.log(Number(inputYear));

// console.log(inputYear + 18);
// console.log(Number(inputYear) + 18);

// console.log(Number('Deepak'));


// console.log(typeof NaN);

// console.log(String(23), 23);


// //type coercion
// console.log('I am ' + 23 + ' Years Old');
// console.log('I am ' + '23' + ' Years Old');

// console.log('23' - '10' - 3);
// console.log('23' * '5');


// let n = '1' + 1;

// n = n - 1;
// console.log(n);


// Truthy and falsy value

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Deepak'));
// console.log(Boolean({}));

// const money = 100;
// if (money) {
//     console.log("Dont use it all to for shopping");
// } else {
//     console.log('You should get a Job!');
// }

// let height = 0;

// if (height) {
//     console.log("Yay height is defined");
// } else {
//     console.log('height is not defined');
// }


//Equality Operators

const age = '18';
if (age === 18) {
    console.log('You are an adult :D (strict)');
}

if (age == 18) {
    console.log('You are an adult :D (loose)');
}


const fav = Number(prompt("What syou favourate number"))

console.log(fav);
console.log(typeof fav);

if (fav === 23) {
    console.log('cool its an amaizing number');
} else if (fav === 7) {
    console.log('7 is alo cool');
} else {
    console.log('Number is not 23 or 7');
}

if (fav !== 23) {
    console.log('Why not the 23');
}