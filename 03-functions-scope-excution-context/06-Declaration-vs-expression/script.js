console.log(addDollerSign(100));//hoisting
//Function Declaration 

function addDollerSign(value) {
    return '$' + value;
}

//Function Expression Declaration

const addPlusSign = function (value) {
    return '+' + value;
}

console.log(addPlusSign(200));