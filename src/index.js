const express = require("express");
const { DBService } = require("./services/db-service");
const { AnimalService } = require("./services/animal-service");
const { AdopterService } = require("./services/adopter-service");
const { RescuerService } = require("./services/rescuer-service");
const { SupervisorService } = require("./services/supervisor-service");

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

  app.post("/adopter", async (req, res) => {
    try {
      const response = await AdopterService.create(req.body);
      res.status(200).send(response);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  });
  app.get("/adopter", async (req, res) => {
    try {
      const response = await AdopterService.read();
      res.status(200).send(response);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  });
  app.put("/adopter", async (req, res) => {
    try {
      const response = await AdopterService.update(req.body);
      res.status(200).send(response);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  });
  app.delete("/adopter", async (req, res) => {
    try {
      const response = await AdopterService.delete(req.body);
      res.status(200).send(response);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  });

  app.post("/rescuer", async (req, res) => {
    try {
      const response = await RescuerService.create(req.body);
      res.status(200).send(response);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  });
  app.get("/rescuer", async (req, res) => {
    try {
      const response = await RescuerService.read();
      res.status(200).send(response);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  });
  app.put("/rescuer", async (req, res) => {
    try {
      const response = await RescuerService.update(req.body);
      res.status(200).send(response);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  });
  app.delete("/rescuer", async (req, res) => {
    try {
      const response = await RescuerService.delete(req.body);
      res.status(200).send(response);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  });

  app.post("/supervisor", async (req, res) => {
    try {
      const response = await SupervisorService.create(req.body);
      res.status(200).send(response);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  });
  app.get("/supervisor", async (req, res) => {
    try {
      const response = await SupervisorService.read();
      res.status(200).send(response);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  });
  app.put("/supervisor", async (req, res) => {
    try {
      const response = await SupervisorService.update(req.body);
      res.status(200).send(response);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  });
  app.delete("/supervisor", async (req, res) => {
    try {
      const response = await SupervisorService.delete(req.body);
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
