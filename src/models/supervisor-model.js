const { DBService } = require("../services/db-service");
const Schema= DBService.getSchema();
const schema = {
  _id: Schema.Types.ObjectId,
  name: String,
  phone: String,
  email: String,
  schedule: String, //horario
};

const Supervisor = DBService.createModel("Supervisor", schema);

module.exports = {
  Supervisor,
};
