const mongoose = require('mongoose');

const projectionSchema = new mongoose.Schema({
  value: {
    type: Number,
    required: true,
    default: 0
  },
  isPeak: {
    type: Boolean,
    default: false
  }
});

const forecastSchema = new mongoose.Schema({
  material: {
    type: String,
    required: true
  },
  actualDelivery: {
    april: { type: Number, default: 0 },
    may: { type: Number, default: 0 },
    june: { type: Number, default: 0 }
  },
  projections: {
    july: projectionSchema,
    august: projectionSchema,
    september: projectionSchema
  }
}, {
  timestamps: true
});

const Forecast = mongoose.model('Forecast', forecastSchema);
module.exports = Forecast;
