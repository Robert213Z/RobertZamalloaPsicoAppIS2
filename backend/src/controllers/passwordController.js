const pool = require('../config/db');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

exports.forgotPassword = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (user.rowCount === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        const token = jwt.sign({ id: user.rows[0].id }, process.env.JWT_SECRET, { expiresIn: '15m' });

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Recuperación de contraseña',
            html: `<p>Haz clic en el siguiente enlace para restablecer tu contraseña:</p>
            <a href="${process.env.CLIENT_URL}/reset-password/${token}">Restablecer contraseña</a>`
        };

        await transporter.sendMail(mailOptions);

        res.json({ message: 'Correo enviado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al enviar correo' });
    }
};

exports.resetPassword = async (req, res) => {
    const { token, newPassword } = req.body;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        await pool.query('UPDATE users SET password = $1 WHERE id = $2', [hashedPassword, decoded.id]);

        res.json({ message: 'Contraseña actualizada con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al restablecer contraseña' });
    }
};

