var Employee = function (id, name) {
  if (!id || name) {
    console.log("fields are mandatory");
  }
  this.id = id;
  this.name = name;
};
Employee.prototype.setSallary = function (salary) {
  this.salary = salary;
};

Employee.prototype.getID = function () {
  this.id = id;
};

Employee.prototype.getName = function () {
  return this.name;
};

Employee.prototype.getSalary = function () {
  return this.salary;
};

// class Manager extends Employee {
//   setDepartment(name) {
//     this.department = name;
//   }

//   getDepartMant() {
//     return this.department;
//   }
// }
console.log(Employee.name);
