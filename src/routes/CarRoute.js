const express = require('express');
const router = express.Router();
const {CreatenewCar, getAllCars} = require('../controllers/CarController')

router.get('/cars', getAllCars);
router.post('/newcar', CreatenewCar);

module.exports = router;