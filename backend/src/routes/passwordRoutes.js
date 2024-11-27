const express = require('express');
const { forgotPassword, resetPassword } = require('../controllers/passwordController');

const router = express.Router();

// Ruta para solicitar recuperación de contraseña
router.post('/forgot-password', forgotPassword);

// Ruta para restablecer contraseña
router.post('/reset-password', resetPassword);

module.exports = router;
