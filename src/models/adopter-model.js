const { DBService } = require("../services/db-service");
const Schema = DBService.getSchema();

const adopterSchema = Schema({
  _id: Schema.Types.ObjectId,
  animal: [{ type: Schema.Types.ObjectId, ref: "Animal" }],
  supervisor: [{ type: Schema.Types.ObjectId, ref: "Supervisor" }],
  name: String,
  phone: String,
  email: String,
  address: String,
});

module.exports = {
  Adopter: adopterSchema,
};
