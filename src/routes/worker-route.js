const express = require('express');
const { WorkerService } = require("../services/worker-service");


const router = express.Router();

app.post("/worker", async (req, res) => {
    try {
      const response = await WorkerService.create(req.body);
      res.status(200).send(response);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  });
  app.get("/worker", async (req, res) => {
    try {
      const response = await WorkerService.read();
      res.status(200).send(response);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  });
  app.put("/worker", async (req, res) => {
    try {
      const response = await WorkerService.update(req.body);
      res.status(200).send(response);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  });
  app.delete("/worker", async (req, res) => {
    try {
      const response = await WorkerService.delete(req.body);
      res.status(200).send(response);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  });
  module.exports = router;