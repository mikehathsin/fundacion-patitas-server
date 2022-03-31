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

main();
