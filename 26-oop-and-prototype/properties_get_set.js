function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      this._email.toUpperCase();
    },
    set: function (value) {
      this.email = value;
    },
  });
  Object.defineProperty(this, "password", {
    get: function () {
      this._password.toUpperCase();
    },
    set: function (value) {
      this.password = value;
    },
  });
}

const tea = new User("t@t.com", "1tea");

console.log(tea);
