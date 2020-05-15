const sql = require("./db.js");

const Promo = function (promo) {
  this.code = promo.code;
  this.active = promo.active;
  this.discount = promo.discount;
};

Promo.create = (newPromo, result) => {
  sql.query("INSERT INTO promotions SET ?", newPromo, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, { id: res.insertId, ...newPromo });
  });
};

Promo.assign = (product_id, promotion_id, result) => {
  sql.query(
    "INSERT INTO productspromotions SET ?",
    { product_id, promotion_id },
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      result(null, { id: res.insertId, product_id, promotion_id });
    }
  );
};

module.exports = Promo;
