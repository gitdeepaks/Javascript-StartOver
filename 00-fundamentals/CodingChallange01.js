const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMImark = massMark / heightMark ** 2;
const bmiJohn = massJohn / (heightJohn * heightJohn);
const markHeier = BMImark > bmiJohn;
console.log(BMImark, bmiJohn);

console.log(markHeier);

console.log(`Is Mark's BMI higher than John's? ${markHeier}`);
