function registerUser(user = 'Bot') {

    // if (!user) {
    //     user = 'Bot'
    // }
    return user + ' is registered '
}





console.log(registerUser())

//Rest Parameters

function sum(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}
console.log(sum(1, 2, 3, 4, 5, 6, 100));

// objects as param

function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
    id: 1,
    name: 'John',
};

console.log(loginUser(user));

//Arrays as params

function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    console.log(item);
}

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10])