const pool = require('../config/db');

// Asignar test a un paciente
exports.assignTest = async (req, res) => {
  const { pacienteId, cuestionarioId } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO testdiagnostico (pacienteId, cuestionarioId, estado, fechaAsignacion)
       VALUES ($1, $2, 'pendiente', NOW()) RETURNING *`,
      [pacienteId, cuestionarioId]
    );
    res.status(201).json({ success: true, test: result.rows[0] });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: 'Error al asignar test' });
  }
};

// Completar test
exports.completeTest = async (req, res) => {
  const { testId, resultados } = req.body;
  try {
    await pool.query(
      `UPDATE testdiagnostico SET resultados = $1, estado = 'completado', fechaCompletado = NOW() WHERE id = $2`,
      [JSON.stringify(resultados), testId]
    );
    res.status(200).json({ success: true, message: 'Test completado' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: 'Error al completar test' });
  }
};

// Ver resultados del test
exports.getTestResults = async (req, res) => {
  const { testId } = req.params;
  try {
    const result = await pool.query(
      `SELECT * FROM testdiagnostico WHERE id = $1`,
      [testId]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Test no encontrado' });
    }
    res.status(200).json({ success: true, test: result.rows[0] });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: 'Error al obtener resultados del test' });
  }
};

//historial de test por usuario
exports.getTestHistory = async (req, res) => {
    const { userId } = req.params;

    try {
        const result = await pool.query('SELECT * FROM testdiagnostico WHERE pacienteId = $1 ORDER BY fecha DESC', [userId]);
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el historial de test' });
    }
};

