const express = require('express');
const router = express.Router();
const simController = require('../controllers/simController');

router.post('/activate', simController.activateSim);

router.post('/deactivate', simController.deactivateSim);

router.get('/sim-details/:simNumber', simController.getSimDetails);

router.post('/add', simController.addSimCard);

module.exports = router;
