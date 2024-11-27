const express = require('express');
const { createReporte, getReportesByPaciente, deleteReporte } = require('../controllers/reporteController');
const router = express.Router();

router.post('/', createReporte);
router.get('/:pacienteId', getReportesByPaciente);
router.delete('/:id', deleteReporte);

module.exports = router;
