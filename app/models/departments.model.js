const sql = require("./db.js");

const Department = function (department) {
  this.name = department.name;
};

Department.create = (newDepartment, result) => {
  sql.query("INSERT INTO departments SET ?", newDepartment, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    result(null, { id: res.insertId, ...newDepartment });
  });
};

Department.getAll = (result) => {
  sql.query("SELECT * FROM departments", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

module.exports = Department;
