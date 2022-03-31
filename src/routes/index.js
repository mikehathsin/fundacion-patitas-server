const express = require('express');
const adopterRouter = require('./adopter-route')
const clinicHistoryRouter = require('./clinicHistory-route')
const animalRouter = require('./animal-route')
const supervisorRouter = require('./supervisor-route')
const workerRouter = require('./worker-route')

function routerApi(app){

  const router = express.Router();
  app.use('/api/v1',router);

  router.use('/adopterRouter',adopterRouter);
  router.use('/clinicHistoryRouter',clinicHistoryRouter);
  router.use('/animalRouter',animalRouter);
  router.use('/supervisorRouter',supervisorRouter);
  router.use('/workerRouter',workerRouter);
  
}

module.exports=routerApi;
