## Main Features

- Created with "ExpressJs" and ["Mysqljs"](https://github.com/mysqljs/mysql)
- Database is MySql.

## Database

- Database connection is in `config/db.config.js`
- To add sample data to database uncomment line 18,19 in `app/models/db.js`: `db.init(connection)`, `db.dummyData(connection)`;

## `node server`

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

  - with params `name`, `price`, `department_id`

- Get products with endpoint: `/products`
  - with params `pageIndex`, `pageCount`, `department` (department id), `promo` (promo code), `search` (product name)

<b>I wish I had more time to add routes for create promo code and assign it to product</b>
