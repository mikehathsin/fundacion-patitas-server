const { Rescuer } = require("../models/rescuer-model");

class RescuerService {
  static async create({ name, ...data }) {
    if (!name) {
      throw new Error("the 'name' field is required");
    }

    const rescuer = new Rescuer({ name, ...data });
    const response = await rescuer.save();
    return response;
  }

  static async read() {
    const response = await Rescuer.find();
    return response;
  }

  static async update({ _id, ...data }) {
    const filter = { _id };

    await Rescuer.findOneAndUpdate(filter, data);
    const response = await Rescuer.findOne(filter);
    return response;
  }

  static async delete({ _id }) {
    const filter = { _id };
    const response = await Rescuer.deleteOne(filter);
    return response;
  }
}

module.exports = {
  RescuerService,
};
