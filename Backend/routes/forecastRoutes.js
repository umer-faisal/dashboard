const express = require('express');
const router = express.Router();
const {
  getAllForecasts,
  createForecast,
} = require('../controllers/forecastController');
const { updateForecastPeaks } = require('../controllers/forecastController');
const { protect, admin } = require('../middileware/authMiddleware');



// Public routes for now
router.get('/', getAllForecasts);


// Protected POST route (only admin can create forecast)
router.post('/', protect, adminOnly, createForecast);

module.exports = router;


router.patch('/:id', protect, admin, updateForecastPeaks);
