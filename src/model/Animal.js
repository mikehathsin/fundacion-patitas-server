const mongoose = require("mongoose");
const { Schema } = mongoose;

const animalSchema = Schema({
  _id: Schema.Types.ObjectId,
  rescuer: [{ type: Schema.Types.ObjectId, ref: "Rescuer" }],
  history: [{ type: Schema.Types.ObjectId, ref: "History" }],
  adopter: [{ type: Schema.Types.ObjectId, ref: "Adopter" }],
  name: String,
  type: String,
  color: String,
  place_rescue: String,
  date_rescue: Date,
});

