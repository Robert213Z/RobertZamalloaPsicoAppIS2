//prueba de Caaja blanca con complejidad ciclomatica  no menor de 4.

const request = require('supertest');
const { expect } = require('chai');
const app = require('../app'); // Asegúrate de que el archivo app.js exporte tu aplicación

describe('POST /api/auth/login', () => {
    it('debería iniciar sesión con credenciales correctas', async () => {
        const response = await request(app)
            .post('/api/auth/login')
            .send({ email: 'usuario1@dominio.com', password: 'password123' });

        expect(response.status).to.equal(200);  // Espera un estado 200
        expect(response.body.success).to.be.true; // Espera que la respuesta tenga success: true
    });

    it('debería devolver un error si las credenciales son incorrectas', async () => {
        const response = await request(app)
            .post('/api/auth/login')
            .send({ email: 'usuario1@dominio.com', password: 'wrongpassword' });

        expect(response.status).to.equal(401);  // Error de autenticación
        expect(response.body.success).to.be.false;
        expect(response.body.message).to.equal('Credenciales incorrectas');
    });

    it('debería devolver un error si hay un problema en la consulta SQL', async () => {
        const response = await request(app)
            .post('/api/auth/login')
            .send({ email: 'usuario1@dominio.com', password: 'password123' });

        expect(response.status).to.equal(500);  // Error del servidor
        expect(response.body.success).to.be.false;
        expect(response.body.message).to.equal('Error al procesar la solicitud');
    });

    it('debería devolver un error si el email está vacío', async () => {
        const response = await request(app)
            .post('/api/auth/login')
            .send({ email: '', password: 'password123' });

        expect(response.status).to.equal(400);  // Bad request
        expect(response.body.message).to.equal('Campos vacíos');
    });
});
