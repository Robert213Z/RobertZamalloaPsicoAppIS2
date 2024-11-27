const pool = require('../config/db');

// Crear cuestionario
exports.createCuestionario = async (req, res) => {
  const { titulo, preguntas } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO cuestionario (titulo, preguntas) VALUES ($1, $2) RETURNING *`,
      [titulo, JSON.stringify(preguntas)]
    );
    res.status(201).json({ success: true, cuestionario: result.rows[0] });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: 'Error al crear cuestionario' });
  }
};

// Obtener todos los cuestionarios
exports.getCuestionarios = async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM cuestionario`);
    res.status(200).json({ success: true, cuestionario: result.rows });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: 'Error al obtener cuestionario' });
  }
};

//editar un cuestionario 
exports.updateQuestionnaire = async (req, res) => {
    const { id } = req.params;
    const { titulo, preguntas } = req.body;

    try {
        await pool.query('UPDATE cuestionario SET titulo = $1, preguntas = $2 WHERE id = $3', [titulo, preguntas, id]);
        res.json({ message: 'Cuestionario actualizado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el cuestionario' });
    }
};

//eliminar un cuestionario
exports.deleteQuestionnaire = async (req, res) => {
    const { id } = req.params;

    try {
        await pool.query('DELETE FROM cuestionario WHERE id = $1', [id]);
        res.json({ message: 'Cuestionario eliminado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el cuestionario' });
    }
};

//buscar un cuestionario
exports.searchQuestionnaires = async (req, res) => {
    const { query } = req.query;

    try {
        const result = await pool.query(
            'SELECT * FROM cuestionario WHERE titulo ILIKE $1',
            [`%${query}%`]
        );
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al buscar cuestionario' });
    }
};

exports.getPreguntasCuestionario = async (req, res) => {
  const { id } = req.params; // ID del cuestionario
  try {
      const result = await pool.query(
          'SELECT preguntas FROM cuestionario WHERE id = $1',
          [id]
      );

      if (result.rows.length === 0) {
          return res.status(404).json({ message: 'Cuestionario no encontrado' });
      }

      const preguntas = JSON.parse(result.rows[0].preguntas);
      res.status(200).json({ success: true, preguntas });
  } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Error al obtener las preguntas del cuestionario' });
  }
};

exports.enviarRespuestasCuestionario = async (req, res) => {
  const { id } = req.params; // ID del cuestionario
  const { respuestas } = req.body;

  try {
      const result = await pool.query(
          'INSERT INTO respuestas (cuestionario_id, respuestas) VALUES ($1, $2) RETURNING *',
          [id, JSON.stringify(respuestas)]
      );

      res.status(201).json({ success: true, message: 'Respuestas enviadas exitosamente', data: result.rows[0] });
  } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Error al enviar las respuestas del cuestionario' });
  }
};

exports.buscarCuestionarios = async (req, res) => {
  const { query } = req.query; // Término de búsqueda

  try {
      const result = await pool.query(
          'SELECT * FROM cuestionario WHERE titulo ILIKE $1',
          [`%${query}%`]
      );

      res.status(200).json({ success: true, cuestionarios: result.rows });
  } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Error al buscar cuestionarios' });
  }
};
