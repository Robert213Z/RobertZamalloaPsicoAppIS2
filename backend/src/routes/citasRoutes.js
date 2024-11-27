const express = require('express');
const { getCitas, createCita } = require('../controllers/citasController');
const router = express.Router();

// Rutas de citas
router.get('/:userId', getCitas);
router.post('/', createCita);

module.exports = router;
