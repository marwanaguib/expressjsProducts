const sql = require("./db.js");

const Products = function (products) {
  this.name = products.name;
  this.price = products.price;
  this.department_id = products.department_id;
};

Products.create = (newProducts, result) => {
  sql.query("INSERT INTO products SET ?", newProducts, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, { id: res.insertId, ...newProducts });
  });
};

Products.getAll = (req, result) => {
  const pageStart = req.body.pageIndex * req.body.pageCount;
  const departmentFilter = req.body.department
    ? `department_id = ${req.body.department}`
    : 1;
  const promoFilter = req.body.promo
    ? `code = '${req.body.promo}' AND active = 1`
    : 1;
  const searchFilter = req.body.search
    ? `Product.name LIKE '${req.body.search}'`
    : 1;

  const joinState = `LEFT JOIN productspromotions AS PP ON Product.id=PP.product_id LEFT JOIN promotions AS Promo ON PP.promotion_id = Promo.id LEFT JOIN departments AS Department ON Product.department_id = Department.id WHERE ${departmentFilter} AND ${promoFilter} AND ${searchFilter}`;
  sql.query(
    `SELECT COUNT(*) AS count FROM products AS Product ${joinState}; SELECT Product.id,Product.name,Product.price,Promo.discount AS promo, Promo.active AS isActive FROM products AS Product ${joinState} LIMIT ${pageStart},${req.body.pageCount};`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      result(null, { count: res[0][0]["count"], items: res[1] });
    }
  );
};

module.exports = Products;
