const pool = require('../config/db');

// Registro de usuario
exports.registerUser = async (req, res) => {
    const { nombreCompleto, apellido, email, password, dni, fechaNac, numeroCelular, rol } = req.body;
    try {
        const result = await pool.query(
            `INSERT INTO users (nombreCompleto, apellido, email, password, dni, fechaNac, numeroCelular, rol)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
            [nombreCompleto, apellido, email, password, dni, fechaNac, numeroCelular, 'paciente'] 
        );
        res.status(201).json({ success: true, user: result.rows[0] });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, message: 'Error al registrar usuario' });
    }
};

// Inicio de sesión
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await pool.query(`SELECT * FROM users WHERE email = $1 AND password = $2`, [email, password]);
        if (result.rows.length > 0) {
            res.status(200).json({ success: true, user: result.rows[0] });
        } else {
            res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, message: 'Error al iniciar sesión' });
    }
};

