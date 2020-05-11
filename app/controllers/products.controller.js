const Products = require("../models/products.model.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const products = new Products({
    name: req.body.name,
    price: req.body.price,
    department_id: req.body.department_id,
  });

  Products.create(products, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Products.",
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  Products.getAll(req, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    else res.send(data);
  });
};
