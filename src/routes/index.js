const express = require("express");
const adopterRouter = require("./adopter-route");
const clinicHistoryRouter = require("./clinicHistory-route");
const animalRouter = require("./animal-route");
const supervisorRouter = require("./supervisor-route");
const workerRouter = require("./worker-route");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);

  router.use('/',adopterRouter);
  router.use('/',clinicHistoryRouter);
  router.use('/',animalRouter);
  router.use('/',supervisorRouter);
  router.use('/',workerRouter);
  
}

module.exports = routerApi;
