const colorObject = {
    color1: 'red',
    color1: 'yellow',
    color1: 'orange',
    color1: 'blue',
    color1: 'green',
};


for (const key in colorObject) {
    console.log(key, colorObject[key]);
}

const colorArr = ['red', 'yellow', 'orange', 'blue'];

for (const key in colorArr) {
    console.log(colorArr[key]);

}
