const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: { type: String, required: true, max: 200 }
});

module.exports = mongoose.model('Contact', ContactSchema);
