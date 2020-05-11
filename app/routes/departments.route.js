module.exports = (app) => {
  const departments = require("../controllers/departments.controller.js");

  app.post("/departments", departments.create);

  app.get("/departments", departments.findAll);
};
