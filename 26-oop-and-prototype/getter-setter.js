class User {
  constructor(email, password) {
    this.password = password;
    this.email = email;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
  get password() {
    return this._password.toUpperCase();
  }
  set password(value) {
    this._password = this.value.toUpperCase();
  }
}

const deepak = new User("d@d.com", "abc");

console.log(deepak.password);
