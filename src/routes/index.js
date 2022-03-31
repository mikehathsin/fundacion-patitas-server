const express = require('express');
const adopterRouter = require('./adopter-router')
const clinicHistoryRouter = require('./clinicHistory-router')
const animalRouter = require('./animal-router')
const supervisorRouter = require('./supervisor-router')
const workerRouter = require('./worker-router')

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
