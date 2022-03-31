const mongoose = require("mongoose");
const { Schema } = mongoose;

const rescuerSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  phone: String,
  email: String,
  type: [{ type: Schema.Types.ObjectId, ref: "TypeRescuer" }],
});

const typeRescuerSchema = Schema({
  _id: Schema.Types.ObjectId,
  description: String,
  // stories: [{ type: Schema.Types.ObjectId, ref: "Animal" }],
});
