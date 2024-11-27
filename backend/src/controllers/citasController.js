const pool = require('../config/db');

// Obtener citas
exports.getCitas = async (req, res) => {
    const { userId } = req.params;
    try {
        const result = await pool.query(
            `SELECT * FROM citas WHERE pacienteId = $1 OR psicologoId = $1 ORDER BY fecha, hora`,
            [userId]
        );
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Error al obtener citas' });
    }
};

// Crear cita
exports.createCita = async (req, res) => {
    const { pacienteId, psicologoId, fecha, hora } = req.body;
    try {
        const result = await pool.query(
            `INSERT INTO citas (pacienteId, psicologoId, fecha, hora) 
             VALUES ($1, $2, $3, $4) RETURNING *`,
            [pacienteId, psicologoId, fecha, hora]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Error al crear cita' });
    }
};
