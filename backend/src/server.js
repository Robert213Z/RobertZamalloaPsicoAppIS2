const express = require('express');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/authRoutes');
const citasRoutes = require('./routes/citasRoutes');
const cuestionarioRoutes = require('./routes/cuestionarioRoutes');
const reporteRoutes = require('./routes/reporteRoutes');
const sesionRoutes = require('./routes/sesionRoutes');
const testRoutes = require('./routes/testRoutes');
const logRoutes = require('./routes/logRoutes');
const passwordRoutes = require('./routes/passwordRoutes');
const perfilRoutes = require('./routes/perfilRoutes');

// Middleware
app.use(express.json());
// Configurar CORS
app.use(cors()); // Habilita CORS para todas las solicitudes
app.get('/', (req, res) => {
    res.send('CORS habilitado');
});
app.use(cors({ origin: 'http://localhost:5173' })); // Ajusta al puerto de tu frontend


// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/citas', citasRoutes);
app.use('/api/cuestionario', cuestionarioRoutes);
app.use('/api/reporte',reporteRoutes);
app.use('/api/sesion',sesionRoutes);
app.use('/api/test',testRoutes);
app.use('/api/log',logRoutes);
app.use('/api/password',passwordRoutes);
app.use('/api/perfil',perfilRoutes);


// Inicio del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
