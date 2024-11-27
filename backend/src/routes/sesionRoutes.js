const express = require('express');
const { createSesion, getSesionesByPaciente } = require('../controllers/sesionController');
const router = express.Router();

router.post('/', createSesion);
router.get('/:pacienteId', getSesionesByPaciente);

module.exports = router;
