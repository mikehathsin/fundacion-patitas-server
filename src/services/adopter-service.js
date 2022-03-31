const { Adopter } = require("../models/adopter-model");

class AdopterService {
  static async create({ name }) {
    if (!name) {
      throw new Error("the 'name' field is required");
    }

    const adopter = new Adopter({ name });
    const response = await adopter.save();
    return response;
  }

  static async read() {
    const response = await Adopter.find();
    return response;
  }

  static async update({ _id, ...data }) {
    const filter = { _id };

    await Adopter.findOneAndUpdate(filter, data);
    const response = await Adopter.findOne(filter);
    return response;
  }

  static async delete({ _id }) {
    const filter = { _id };
    const response = await Adopter.deleteOne(filter);
    return response;
  }
}

module.exports = {
  AdopterService,
};
