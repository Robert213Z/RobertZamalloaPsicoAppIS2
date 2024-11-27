const express = require('express');
const { createCuestionario, getCuestionarios, updateQuestionnaire,
    deleteQuestionnaire,
    searchQuestionnaires, getPreguntasCuestionario, 
    enviarRespuestasCuestionario, 
    buscarCuestionarios } = require('../controllers/cuestionarioController');
const router = express.Router();

router.post('/', createCuestionario);
router.get('/', getCuestionarios);
// Ruta para editar un cuestionario
router.put('/:id', updateQuestionnaire);

// Ruta para eliminar un cuestionario
router.delete('/:id', deleteQuestionnaire);

// Ruta para buscar cuestionarios
router.get('/search', searchQuestionnaires);
// Ruta para obtener preguntas de un cuestionario
router.get('/:id', getPreguntasCuestionario);

// Ruta para enviar respuestas de un cuestionario
router.post('/:id/respuestas', enviarRespuestasCuestionario);

// Ruta para buscar cuestionarios
router.get('/buscar', buscarCuestionarios);

module.exports = router;
