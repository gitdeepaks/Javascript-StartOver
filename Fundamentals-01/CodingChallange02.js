// const massMark = 95
// const heightMark = 1.88

// const massJohn = 85
// const heightJohn = 1.76


const massMark = 78
const heightMark = 1.69

const massJohn = 92
const heightJohn = 1.95

const BMImark = massMark / heightMark ** 2
const BMIJohn = massJohn / (heightJohn * heightJohn)
// const markHeier = BMImark > BMIJohn


if (BMImark > BMIJohn) {
    console.log(`BMI of Mark i.e (${BMImark}) is higher than Jhon (${BMIJohn})`);
} else {
    console.log(`BMI of John i.e. (${BMIJohn}) is higher than Mark (${BMImark})`);
}