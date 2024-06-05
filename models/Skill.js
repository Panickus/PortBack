const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'], required: true },
  logo: { type: String } // URL del logo de la habilidad
});

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;
