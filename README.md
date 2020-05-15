## Main Features

- Created with "ExpressJs" and ["Mysqljs"](https://github.com/mysqljs/mysql)
- Database is MySql.

## Database

- Database connection is in `config/db.config.js`
- To add sample data to database uncomment line 18,19 in `app/models/db.js`: `db.init(connection)`, `db.dummyData(connection)`;

## Run scripts `node server` `nodemon server`

Runs the app on port 3000.<br />

## Available API endpoints

### Departments:

#### Get

- Get all departments with endpoint: `/departments`

#### Post

- Create department with endpoint: `/departments`
  - with param `name`

### Products:

#### Post

- Create product with endpoint: `/product`

  - With params `name`, `price`, `department_id`

- Get products with endpoint: `/products`
  - With params `pageIndex`, `pageCount`, `department` (department id), `promo` (promo code), `search` (product name)

### Promo Codes:

#### Post

- Create promotion with endpoint: `/promo`

  - With params `code`, `active` (takes 1 or 2), `discount` (takes discount percentage ex: 10%)

- Assign promotion to product: `/product-promo`
  - With params `product_id`, `promotion_id`
