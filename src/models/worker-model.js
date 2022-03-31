const { DBService } = require("../services/db-service");

const Schema= DBService.getSchema();
const schema = {
  _id: Schema.Types.ObjectId,
  name: String,
  phone: String,
  email: String,
  type: [{ type: Schema.Types.ObjectId, ref: "TypeWorker" }],
  schedule: String, //horario
};
const Worker = DBService.createModel("Worker", schema);

module.exports = {
  Worker,
};

