const express = require('express');
const { assignTest, completeTest, getTestResults, getTestHistory } = require('../controllers/testController');
const router = express.Router();

router.post('/assign', assignTest);
router.post('/complete', completeTest);
router.get('/:testId', getTestResults);
// Ruta para obtener el historial de tests por usuario
router.get('/:userId/history', getTestHistory);

module.exports = router;
