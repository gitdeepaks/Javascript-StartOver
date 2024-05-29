class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`USER: ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourses() {
    console.log(`New Course added by ${this.username}`);
  }
}

const tea = new Teacher("tea", "tea@tea.com", "123");

tea.addCourses();

const masalaChai = new User("masalaChai");

masalaChai.logMe();

console.log(tea instanceof Teacher);
