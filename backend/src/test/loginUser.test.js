// prueba  de un metodo con 4 pruebas unitarias

const { expect } = require('chai');
const sinon = require('sinon');
const authController = require('../controllers/authController');  // Asegúrate de que la ruta sea correcta
const pool = require('../config/db');  // Tu pool de base de datos

describe('loginUser', () => {

    let poolStub;

    beforeEach(() => {
        // Usamos Sinon para crear un stub de la consulta SQL
        poolStub = sinon.stub(pool, 'query');
    });

    afterEach(() => {
        // Restauramos el comportamiento original después de cada prueba
        poolStub.restore();
    });

    it('debería autenticar al usuario correctamente con credenciales válidas', async () => {
        const mockUser = { email: 'usuario@example.com', password: 'password123', isBlocked: false };

        // Simulamos que la consulta a la base de datos devuelve un usuario válido
        poolStub.resolves({ rows: [mockUser] });

        const response = await authController.loginUser('usuario@example.com', 'password123');

        expect(response.success).to.be.true;
        expect(response.user.email).to.equal('usuario@example.com');
    });

    it('debería devolver un error si las credenciales son incorrectas', async () => {
        // Simulamos que no se encuentra el usuario en la base de datos
        poolStub.resolves({ rows: [] });

        const response = await authController.loginUser('usuario@example.com', 'wrongpassword');

        expect(response.success).to.be.false;
        expect(response.message).to.equal('Credenciales incorrectas');
    });

    it('debería devolver un error si la cuenta está bloqueada', async () => {
        const mockUser = { email: 'usuario@example.com', password: 'password123', isBlocked: true };

        // Simulamos que el usuario está bloqueado
        poolStub.resolves({ rows: [mockUser] });

        const response = await authController.loginUser('usuario@example.com', 'password123');

        expect(response.success).to.be.false;
        expect(response.message).to.equal('Cuenta bloqueada');
    });

    it('debería devolver un error si el email o la contraseña están vacíos', async () => {
        const response = await authController.loginUser('', '');

        expect(response.success).to.be.false;
        expect(response.message).to.equal('Credenciales incorrectas');  // O el mensaje que definas para esta validación
    });

});
