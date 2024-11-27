const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const citasRoutes = require('./routes/citasRoutes');
const cuestionarioRoutes = require ('./routes/cuestionarioRoutes');
const reporteRoutes = require('./routes/reporteRoutes');
const sesionRoutes = require('./routes/sesionRoutes');
const testRoutes = require('./routes/testRoutes');
const logRoutes = require('./routes/logRoutes');
const passwordRoutes = require('./routes/passwordRoutes');
const perfilRoutes = require('./routes/perfilRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/citas', citasRoutes);
app.use('/api/cuestionario',cuestionarioRoutes);
app.use('/api/reporte',reporteRoutes);
app.use('/api/sesion',sesionRoutes);
app.use('/api/test',testRoutes);
app.use('/api/log',logRoutes);
app.use('/api/password',passwordRoutes);
app.use('/api/perfil',perfilRoutes);

module.exports = app;
