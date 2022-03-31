const { DBService } = require("../services/db-service");
const Schema= DBService.getSchema();
const schema = {
  _id: Schema.Types.ObjectId,
  rescuer: [{ type: Schema.Types.ObjectId, ref: "Rescuer" }],
  history: [{ type: Schema.Types.ObjectId, ref: "ClinicHistory" }],
  adopter: [{ type: Schema.Types.ObjectId, ref: "Adopter" }],
  name: String,
  type: String,
  color: String,
  place_rescue: String,
  date_rescue: Date,
};

const Animal = DBService.createModel("Animal", schema);

module.exports = {
  Animal,
};
