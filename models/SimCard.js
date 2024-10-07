const mongoose = require('mongoose');

const simCardSchema = new mongoose.Schema({
  simNumber: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  status: { type: String, default: 'inactive' },
  activationDate: { type: Date }
},{timestamps:true});

module.exports = mongoose.model('SimCard', simCardSchema);
