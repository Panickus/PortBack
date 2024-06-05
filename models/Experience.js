const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: Date,
  description: String
});

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;
