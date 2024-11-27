const pool = require('../config/db');

// Crear sesión
exports.createSesion = async (req, res) => {
  const { pacienteId, psicologoId, fecha, hora, linkZoom } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO sesiones (pacienteId, psicologoId, fecha, hora, linkZoom)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [pacienteId, psicologoId, fecha, hora, linkZoom]
    );
    res.status(201).json({ success: true, sesion: result.rows[0] });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: 'Error al crear sesión' });
  }
};

// Listar sesiones por paciente
exports.getSesionesByPaciente = async (req, res) => {
  const { pacienteId } = req.params;
  try {
    const result = await pool.query(
      `SELECT * FROM sesiones WHERE pacienteId = $1 ORDER BY fecha, hora`,
      [pacienteId]
    );
    res.status(200).json({ success: true, sesiones: result.rows });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: 'Error al obtener sesiones' });
  }
};
