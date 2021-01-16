const mongoose = require('mongoose');

// défini le schéma du modèle
const thingSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
  price: { type: Number, required: true },
});

// exporte le modèle
module.exports = mongoose.model('Thing', thingSchema);