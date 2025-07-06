const Forecast = require('../models/Forecast');

// GET all forecasts
const getAllForecasts = async (req, res) => {
  try {
    const forecasts = await Forecast.find();
    res.json(forecasts);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// POST a new forecast (admin use)
const createForecast = async (req, res) => {
  const { material, projections, createdBy } = req.body;
  try {
    const newForecast = new Forecast({ material, projections, createdBy });
    const saved = await newForecast.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: 'Invalid Data' });
  }
};


const updateForecastPeaks = async (req, res) => {
  const { id } = req.params;
  const { projections } = req.body;

  try {
    const forecast = await Forecast.findById(id);
    if (!forecast) {
      return res.status(404).json({ message: 'Forecast not found' });
    }

    forecast.projections.july = projections.july;
    forecast.projections.august = projections.august;
    forecast.projections.september = projections.september;

    const updated = await forecast.save();
    res.status(200).json(updated);

  } catch (err) {
    console.error('Forecast update error:', err);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = {
  getAllForecasts,
  createForecast,
  updateForecastPeaks
};
