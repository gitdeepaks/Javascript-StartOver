// for loop

for (let j = 0; j <= 10; j++) {
  const res = j;

  if (res == 5) {
    console.log("5 is the best");
  }

  //   console.log(res);
}
let myArr = ["batman", "spuierman", "flash"];
for (let index = 0; index < myArr.length; index++) {
  const element = myArr[index];
  console.log(`heros ${element} element arr length ${myArr.length}`);
}

// for (let i = 1; i <= 10; i++) {
//   //   console.log(`OuterLoop:${i}`);
//   for (let j = 1; j <= 10; j++) {
//     // console.log(`Innerloop: ${j} Inner loop ${i}`);

//     console.log(i + "*" + j + "=" + i * j);
//   }
// }

// break and continue

// for (let i = 1; i <= 20; i++) {
//   if (i == 5) {
//     console.log(`detected ${i}`);
//     break;
//   }
//   console.log(`value of i is ${i}`);
// }

for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log(`Detected ${i}`);
    continue;
  }
  console.log(`value of i is ${i}`);
}
