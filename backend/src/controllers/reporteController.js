const pool = require('../config/db');

// Crear reporte
exports.createReporte = async (req, res) => {
  const { psicologoId, pacienteId, contenido } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO reportes (psicologoId, pacienteId, contenido, fechaGeneracion)
       VALUES ($1, $2, $3, NOW()) RETURNING *`,
      [psicologoId, pacienteId, contenido]
    );
    res.status(201).json({ success: true, reporte: result.rows[0] });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: 'Error al crear reporte' });
  }
};

// Listar reportes por paciente
exports.getReportesByPaciente = async (req, res) => {
  const { pacienteId } = req.params;
  try {
    const result = await pool.query(
      `SELECT * FROM reportes WHERE pacienteId = $1 ORDER BY fechaGeneracion DESC`,
      [pacienteId]
    );
    res.status(200).json({ success: true, reportes: result.rows });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: 'Error al obtener reportes' });
  }
};

// Eliminar reporte
exports.deleteReporte = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query(`DELETE FROM reportes WHERE id = $1`, [id]);
    res.status(200).json({ success: true, message: 'Reporte eliminado' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: 'Error al eliminar reporte' });
  }
};
