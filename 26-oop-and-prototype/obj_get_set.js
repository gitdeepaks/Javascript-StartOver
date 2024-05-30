const User = {
  _email: "t@tea.com",
  _password: "abc",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

const greenTea = Object.create(User);

console.log(greenTea.email);
