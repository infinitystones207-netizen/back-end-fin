const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: String,
  passwordHash: String, // For authentication if implemented
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Business", businessSchema);
