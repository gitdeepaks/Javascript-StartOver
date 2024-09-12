class Teacher {
  constructor(name, channel, likes = 0) {
    this.name = name;
    this.channel = channel;
    this.videsLikes = likes;
  }

  intro() {
    return `Hello ${this.name} !Welcome to the ${this.channel}`;
  }

  like() {
    this.videsLikes++;
    return `Likes increased ${this.videsLikes}`;
  }
}

const coder = new Teacher("Deepak", "Ultimate Developer");

console.log(coder);

function Teacher2(name, channel, likes = 0) {
  this.name = name;
  this.channel = channel;
  this.likes = likes;
}

Teacher.prototype.intro = function () {
  return `Hey ${this.name} Welcome to ${this.channel}`;
};

Teacher.prototype.like = function () {
  this.videsLikes++;

  return `Like  ${this.videsLikes}`;
};

const coder2 = new Teacher("Deepak", "Ultimate coder2");

// Ingeritance
class UdemyTeacher extends Teacher {
  constructor(name, channel, likes, students) {
    super(name, channel, likes);
  }

  studentsCount() {
    return `${this.channel} has ${this.students}`;
  }
}

const udemyTeacher = new UdemyTeacher("Deepak", "Ultimate coders", 99);
console.log(udemyTeacher);
