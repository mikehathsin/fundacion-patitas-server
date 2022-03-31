const { DBService } = require("../services/db-service");
const Schema = DBService.getSchema();
const schema = {
  name: String,
  phone: String,
  email: String,
  schedule: ['Matutino','Vespertino'], //horario
};

const Supervisor = DBService.createModel("Supervisor", schema);

module.exports = {
  Supervisor,
};
