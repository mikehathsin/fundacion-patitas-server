const { DBService } = require("../services/db-service");
const Schema = DBService.getSchema();
const schema = {
  animal: [{ type: Schema.Types.ObjectId, ref: "Animal" }],
  supervisor: [{ type: Schema.Types.ObjectId, ref: "Supervisor" }],
  name: String,
  phone: String,
  email: String,
  address: String,
};
const Adopter = DBService.createModel("Adopter", schema);

module.exports = {
  Adopter,
};
