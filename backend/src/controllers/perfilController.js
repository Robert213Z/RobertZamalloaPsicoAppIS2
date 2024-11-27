const pool = require('../config/db');

// Obtener perfil del usuario
exports.getPerfil = async (req, res) => {
  const { userId } = req.params;
  try {
    const result = await pool.query(`SELECT * FROM users WHERE id = $1`, [userId]);
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Usuario no encontrado' });
    }
    res.status(200).json({ success: true, perfil: result.rows[0] });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: 'Error al obtener perfil' });
  }
};

// Actualizar perfil del usuario
exports.updatePerfil = async (req, res) => {
  const { userId } = req.params;
  const { nombreCompleto, email } = req.body;
  try {
    const result = await pool.query(
      `UPDATE users SET nombreCompleto = $1, email = $2 WHERE id = $3 RETURNING *`,
      [nombreCompleto, email, userId]
    );
    res.status(200).json({ success: true, perfil: result.rows[0] });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: 'Error al actualizar perfil' });
  }
};
