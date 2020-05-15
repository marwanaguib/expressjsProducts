const Promo = require("../models/promo.model.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const promo = new Promo({
    code: req.body.code,
    active: req.body.active,
    discount: req.body.discount,
  });

  Promo.create(promo, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Promo.",
      });
    else res.send(data);
  });
};

exports.assign = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  Promo.assign(req.body.product_id, req.body.promotion_id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while assign Product to Promo.",
      });
    else res.send(data);
  });
};
