const mongoose = require('mongoose');

const forecastSchema = new mongoose.Schema({
  material: {
    type: String,
    required: true,
  },
  projections: {
    july: { value: Number, isPeak: Boolean },
    august: { value: Number, isPeak: Boolean },
    september: { value: Number, isPeak: Boolean }
  },
  actualSupply: {
    july: Number,
    august: Number,
    september: Number
  },
  createdBy: {
    type: String, // admin or vendor
    required: true
  }
});

module.exports = mongoose.model('Forecast', forecastSchema);
