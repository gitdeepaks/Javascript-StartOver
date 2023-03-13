function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  // this.area = function () {
  //   return this.width * this.height;
  // };
}

Rectangle.prototype.area = function () {
  return this.width * this.height;
};

Rectangle.prototype.parimeter = function () {
  return 2 * (this.width * this.height);
};

Rectangle.prototype.isSquare = function () {
  return this.width === this.height;
};

Rectangle.prototype.changename = function (newName) {
  return (this.name = newName);
};


const rect = new Rectangle('Rect', 10, 10);

console.log(rect);
console.log(rect.area())
console.log(rect.area)
console.log(rect.parimeter())
console.log(rect.isSquare())
console.log(rect.name)

console.log(rect.area())
// console.log(Object.getPrototypeOf(rect))



// //  Rectangle.prototype inherits from Object.prototype. That's why we can use toString(), etc
// console.log(rect.toString());

// // To get the prototype of an object
// console.log(Object.getPrototypeOf(rect));



