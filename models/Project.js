const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  githubLink: { type: String, required: true },
  images: [{ type: String }], // URLs de las imágenes del proyecto
  captureImage: { type: String } // URL de la captura del proyecto
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
