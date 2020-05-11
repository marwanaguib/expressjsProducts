const Department = require("../models/departments.model.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const department = new Department({
    name: req.body.name,
  });

  Department.create(department, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Department.",
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  Department.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving departments.",
      });
    else res.send(data);
  });
};
