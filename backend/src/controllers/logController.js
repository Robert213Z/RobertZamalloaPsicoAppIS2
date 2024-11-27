const pool = require('../config/db');

// Registrar actividad
exports.logActivity = async (req, res) => {
  const { userId, actividad } = req.body;
  try {
    await pool.query(
      `INSERT INTO logs (userId, actividad, fecha) VALUES ($1, $2, NOW())`,
      [userId, actividad]
    );
    res.status(201).json({ success: true, message: 'Actividad registrada' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: 'Error al registrar actividad' });
  }
};

// Ver logs por usuario
exports.getLogsByUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const result = await pool.query(
      `SELECT * FROM logs WHERE userId = $1 ORDER BY fecha DESC`,
      [userId]
    );
    res.status(200).json({ success: true, logs: result.rows });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: 'Error al obtener logs' });
  }
};
