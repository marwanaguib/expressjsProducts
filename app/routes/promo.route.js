module.exports = (app) => {
  const promo = require("../controllers/promo.controller.js");

  app.post("/promo", promo.create);

  app.post("/product-promo", promo.assign);
};
