const express = require('express');
const { SupervisorService } = require("../services/supervisor-service");

const router = express.Router();

router.post("/supervisor", async (req, res) => {
    try {
      const response = await SupervisorService.create(req.body);
      res.status(200).send(response);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  });
  router.get("/supervisor", async (req, res) => {
    try {
      const response = await SupervisorService.read();
      res.status(200).send(response);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  });
  router.put("/supervisor", async (req, res) => {
    try {
      const response = await SupervisorService.update(req.body);
      res.status(200).send(response);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  });
  router.delete("/supervisor", async (req, res) => {
    try {
      const response = await SupervisorService.delete(req.body);
      res.status(200).send(response);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  });
  module.exports = router;