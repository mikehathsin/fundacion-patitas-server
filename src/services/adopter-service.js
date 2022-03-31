const { Adopter } = require("../models/adopter-model");

class AdopterService {
  static async create({ name }) {
    if (!name) {
      throw new Error("the 'name' field is required");
    }

    const animal = new Animal({ name });
    const response = await animal.save();
    return response;
  }

  static async read() {
    const response = await Animal.find();
    return response;
  }

  static async update({ _id, ...data }) {
    const filter = { _id };

    await Animal.findOneAndUpdate(filter, data);
    const response = await Animal.findOne(filter);
    return response;
  }

  static async delete({ _id }) {
    const filter = { _id };
    const response = await Animal.deleteOne(filter);
    return response;
  }
}

module.exports = {
  AdopterService,
};
