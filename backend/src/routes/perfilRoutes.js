const express = require('express');
const { getPerfil, updatePerfil } = require('../controllers/perfilController');
const router = express.Router();

router.get('/:userId', getPerfil);
router.put('/:userId', updatePerfil);

module.exports = router;
