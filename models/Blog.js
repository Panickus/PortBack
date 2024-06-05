const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
  tags: [String],
  image: { type: String }, // URL de la imagen del blog
  authorAvatar: { type: String } // URL del avatar del autor
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
