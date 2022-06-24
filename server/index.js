const express = require('express');
const bodyParser = require('body-parser');
const getPatients  = require('../database/controllers');
const addPatient  = require('../database/controllers');
const searchPatients  = require('../database/controllers');
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/patients', (req, res) => {
  console.log(req);
  getPatients({})
    .then(patients => {
      console.log(patients);
      res.status(200).send(patients);
    })
    .catch(err => res.status(400).send(`can't get patients due to ${err}`));
})

app.get('/patients/search/', (req, res) => {
  // console.log(req.query);
  searchPatients()
    .then(patients => console.log(patients))
    .catch(err => res.status(400).send(`can't find patients due to ${err}`))
})

app.post('/patient', (req, res) => {
  // console.log(req.body);
  addPatient(req.body)
    .then(response => {
      console.log(response);
      res.status(200).send(req.body);
    })
    .catch(err => res.status(400).send(`uh oh...${err}`));
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`listening on port ${process.env.SERVER_PORT}`);
});