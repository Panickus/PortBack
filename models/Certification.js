const mongoose = require('mongoose');

const certificationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  organization: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String },
  image: { type: String } // URL de la imagen del certificado
});

const Certification = mongoose.model('Certification', certificationSchema);

module.exports = Certification;
