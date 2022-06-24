const mongoose = require('mongoose');
require("dotenv").config();

mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true });

const patientSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  name: String,
  condition: String,
  flow: String,
  nextAppt: Date,
}, { timestamps: true });

const Patients = mongoose.model('Patients', patientSchema);

module.exports = Patients;