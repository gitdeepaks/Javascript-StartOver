class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }
  createId() {
    return `123`;
  }
}

const deepak = new User("deepak");

// console.log(deepak.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iPhone = new Teacher("iphone", "i@phone.com");
console.log(iPhone.createId());
