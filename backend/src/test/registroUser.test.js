// Prueba de Caja Negra  con nomenor de 4 campos

const request = require('supertest');
const { expect } = require('chai');
const app = require('../app');  // Asegúrate de que el archivo app.js exporte tu aplicación

describe('POST /api/auth/register', () => {

    it('debería registrar un usuario con todos los campos válidos', async () => {
        const response = await request(app)
            .post('/api/auth/register')
            .send({
                nombreCompleto: 'Juan Pérez',
                apellido: 'Pérez',
                email: 'juanperez@example.com',
                password: 'password123',
                dni: '12345678',
                fechaNac: '1990-01-01',
                numeroCelular: '987654321',
                rol: 'paciente'
            });

        expect(response.status).to.equal(201);  // Estado 201: Creación exitosa
        expect(response.body.success).to.be.true;
    });

    it('debería devolver un error si el email no tiene un formato válido', async () => {
        const response = await request(app)
            .post('/api/auth/register')
            .send({
                nombreCompleto: 'Juan Pérez',
                apellido: 'Pérez',
                email: 'juanperez.com',  // Email inválido
                password: 'password123',
                dni: '12345678',
                fechaNac: '1990-01-01',
                numeroCelular: '987654321',
                rol: 'paciente'
            });

        expect(response.status).to.equal(400);  // Estado 400: Error por formato incorrecto
        expect(response.body.message).to.equal('Email inválido');
    });

    it('debería devolver un error si los campos obligatorios están vacíos', async () => {
        const response = await request(app)
            .post('/api/auth/register')
            .send({
                nombreCompleto: '',
                apellido: '',
                email: 'juanperez@example.com',
                password: 'password123',
                dni: '12345678',
                fechaNac: '1990-01-01',
                numeroCelular: '987654321',
                rol: 'paciente'
            });

        expect(response.status).to.equal(400);  // Estado 400: Error de campos vacíos
        expect(response.body.message).to.equal('Campos vacíos');
    });

    it('debería devolver un error si la contraseña es demasiado corta', async () => {
        const response = await request(app)
            .post('/api/auth/register')
            .send({
                nombreCompleto: 'Juan Pérez',
                apellido: 'Pérez',
                email: 'juanperez@example.com',
                password: 'pass',  // Contraseña demasiado corta
                dni: '12345678',
                fechaNac: '1990-01-01',
                numeroCelular: '987654321',
                rol: 'paciente'
            });

        expect(response.status).to.equal(400);  // Estado 400: Error por contraseña corta
        expect(response.body.message).to.equal('La contraseña debe tener al menos 8 caracteres');
    });

    it('debería devolver un error si el email ya está registrado', async () => {
        const response = await request(app)
            .post('/api/auth/register')
            .send({
                nombreCompleto: 'Juan Pérez',
                apellido: 'Pérez',
                email: 'usuarioexistente@example.com',  // Un email ya registrado
                password: 'password123',
                dni: '12345678',
                fechaNac: '1990-01-01',
                numeroCelular: '987654321',
                rol: 'paciente'
            });

        expect(response.status).to.equal(409);  // Estado 409: Conflicto (email ya registrado)
        expect(response.body.message).to.equal('El email ya está registrado');
    });

    it('debería devolver un error si la cuenta está bloqueada', async () => {
        const response = await request(app)
            .post('/api/auth/register')
            .send({
                nombreCompleto: 'Juan Pérez',
                apellido: 'Pérez',
                email: 'usuario@bloqueado.com',  // Un email con cuenta bloqueada
                password: 'password123',
                dni: '12345678',
                fechaNac: '1990-01-01',
                numeroCelular: '987654321',
                rol: 'paciente'
            });

        expect(response.status).to.equal(403);  // Estado 403: Prohibido (cuenta bloqueada)
        expect(response.body.message).to.equal('Cuenta bloqueada');
    });
});
