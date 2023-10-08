// shortcircuiting with &&

const price = 1000;

if (price > 500 && price < 2000) {
  console.log("expensive");
}

price > 500 || price < 2000 ? console.log("expensive") : console.log("cheap");
