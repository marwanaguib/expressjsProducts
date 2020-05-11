exports.init = (sql) => {
  sql.query(
    `CREATE TABLE IF NOT EXISTS departments (
        id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
        name varchar(255) NOT NULL
      )`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        return;
      }

      console.log("created departments table ");
    }
  );

  sql.query(
    `CREATE TABLE IF NOT EXISTS products (
        id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
        name varchar(255) NOT NULL,
        price varchar(255) NOT NULL,
        department_id int(11) NOT NULL,
        FOREIGN KEY (department_id) REFERENCES departments(id)
      )`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        return;
      }

      console.log("created products table ");
    }
  );

  sql.query(
    `CREATE TABLE IF NOT EXISTS promotions (
        id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
        code varchar(255) NOT NULL,
        active BOOLEAN NOT NULL,
        discount varchar(255) NOT NULL
      )`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        return;
      }

      console.log("created promotions table ");
    }
  );

  sql.query(
    `CREATE TABLE IF NOT EXISTS productspromotions (
        id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
        product_id int(11) NOT NULL,
        promotion_id int(11) NOT NULL,
        FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
        FOREIGN KEY (promotion_id) REFERENCES promotions(id) ON DELETE CASCADE
      )`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        return;
      }

      console.log("created productspromotions table");
    }
  );
};

exports.dummyData = (sql) => {
  let departments = [["Electronics"], ["Cloths"], ["Toys"]];

  let products = [
    ["Product1", 100, 1],
    ["Product2", 110, 2],
    ["Product3", 80, 3],
    ["Product4", 100, 1],
    ["Product5", 110, 1],
    ["Product6", 100, 1],
    ["Product7", 110, 2],
    ["Product8", 80, 3],
    ["Product9", 100, 1],
    ["Product10", 110, 1],
    ["Product11", 100, 1],
    ["Product12", 110, 2],
    ["Product13", 80, 3],
    ["Product14", 100, 1],
    ["Product15", 110, 1],
  ];

  let promotions = [
    ["tbk523", true, "10%"],
    ["ewre54", false, "2%"],
    ["tbj891", true, "43%"],
    ["werf45", true, "19%"],
  ];

  let productspromotions = [
    [1, 1],
    [2, 1],
    [3, 1],
    [4, 1],
    [5, 1],
    [6, 1],
    [7, 1],
    [8, 1],
    [10, 2],
    [13, 3],
    [15, 4],
  ];

  sql.query(
    {
      sql: "INSERT INTO departments (name) values?",
      values: [[...departments]],
    },
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        return;
      }
      console.log("fill departments dummy data");
    }
  );

  sql.query(
    {
      sql: "INSERT INTO promotions (code,active,discount) values?",
      values: [[...promotions]],
    },
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        return;
      }
      console.log("fill promotions dummy data");
    }
  );

  sql.query(
    {
      sql: "INSERT INTO products (name, price, department_id) values?",
      values: [[...products]],
    },
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        return;
      }
      console.log("fill products dummy data");
    }
  );

  sql.query(
    {
      sql: "INSERT INTO productspromotions (product_id, promotion_id) values?",
      values: [[...productspromotions]],
    },
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        return;
      }
      console.log("fill productspromotions dummy data");
    }
  );
};
