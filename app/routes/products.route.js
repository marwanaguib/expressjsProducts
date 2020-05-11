module.exports = (app) => {
  const products = require("../controllers/products.controller.js");

  app.post("/product", products.create);

  app.post("/products", products.findAll);
};
