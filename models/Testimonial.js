const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  company: { type: String, required: true },
  testimonial: { type: String, required: true },
  companyLogo: { type: String }, // URL del logo de la compañía
  image: { type: String } // URL de la imagen del testimoniado
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

module.exports = Testimonial;
