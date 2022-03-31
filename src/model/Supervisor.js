const mongoose = require("mongoose");
const { Schema } = mongoose;

const supervisorSchema = Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    phone: String,
    email: String,
    schedule: String, //horario
  });