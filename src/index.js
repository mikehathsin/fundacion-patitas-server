const express = require("express");
const { DBService } = require("./services/db-service");
const { AnimalService } = require("./services/animal-service");

const port = 3001;

const main = async () => {
  await DBService.connect();

  const app = express();
  app.use(express.json());

  app.post("/animal", async (req, res) => {
    try {
      const response = await AnimalService.create(req.body);
      res.status(200).send(response);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  });
  app.get("/animal", async (req, res) => {
    try {
      const response = await AnimalService.read();
      res.status(200).send(response);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  });
  app.put("/animal", async (req, res) => {
    try {
      const response = await AnimalService.update(req.body);
      res.status(200).send(response);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  });
  app.delete("/animal", async (req, res) => {
    try {
      const response = await AnimalService.delete(req.body);
      res.status(200).send(response);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

// async function main() {
//   await mongoose.connect("mongodb://localhost:27017/nuevo");

 
//   // let model = mongoose.model("User",mySchema);
//   // await Model.find(filter).populate("users").exec()
//   const storySchema = Schema({
//     author: { type: Schema.Types.ObjectId, ref: "Person" },
//     title: String,
//     fans: [{ type: Schema.Types.ObjectId, ref: "Person" }],
//   });

//   const Story = mongoose.model("Story", storySchema);
//   const Person = mongoose.model("Person", personSchema);
//   const author = new Person({
//     _id: new mongoose.Types.ObjectId(),
//     name: 'Ian Fleming',
//     age: 50
//   });
  
//   author.save(function (err) {
//     if (err) return handleError(err);
  
//     const story1 = new Story({
//       title: 'Casino Royale',
//       author: author._id    // assign the _id from the person
//     });
  
//     story1.save(function (err) {
//       if (err) return handleError(err);
//       // that's it!
//     });
//   });

//   await Person.deleteMany({ name: 'Ian Fleming' });
//   await Story.deleteMany({ name: 'Casino Royale' });

//   const story = await Story.findOne({ title: 'Casino Royale' }).populate('author');
//   console.log(story.author) // `null`
// }
main();
