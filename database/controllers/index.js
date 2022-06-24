const Patients = require('../models');

const getPatients = (all) => {
  return Patients.find(all);
}

const addPatient = (patient) => {
  return Patients.create(patient);
}

const searchPatients = (userInput) => {
  let search = {
    word: { $regex: userInput, $options: "i" }
  };
  return Patients.find(search);
}

module.exports = getPatients;
module.exports = addPatient;
module.exports = searchPatients;