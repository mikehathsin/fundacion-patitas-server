const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/nuevo");

 
  // let model = mongoose.model("User",mySchema);
  // await Model.find(filter).populate("users").exec()
  const storySchema = Schema({
    author: { type: Schema.Types.ObjectId, ref: "Person" },
    title: String,
    fans: [{ type: Schema.Types.ObjectId, ref: "Person" }],
  });

  const Story = mongoose.model("Story", storySchema);
  const Person = mongoose.model("Person", personSchema);
  const author = new Person({
    _id: new mongoose.Types.ObjectId(),
    name: 'Ian Fleming',
    age: 50
  });
  
  author.save(function (err) {
    if (err) return handleError(err);
  
    const story1 = new Story({
      title: 'Casino Royale',
      author: author._id    // assign the _id from the person
    });
  
    story1.save(function (err) {
      if (err) return handleError(err);
      // that's it!
    });
  });

  await Person.deleteMany({ name: 'Ian Fleming' });
  await Story.deleteMany({ name: 'Casino Royale' });

  const story = await Story.findOne({ title: 'Casino Royale' }).populate('author');
  console.log(story.author) // `null`
}
