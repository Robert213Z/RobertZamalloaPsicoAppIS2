const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Cuestionario = require('./cuestionarioModel'); // Importa el modelo del cuestionario
const User = require('./userModel'); // Importa el modelo del usuario

const Test = sequelize.define('Test', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    estado: {
        type: DataTypes.ENUM('pendiente', 'completado'),
        allowNull: false,
        defaultValue: 'pendiente',
    },
    fechaAsignacion: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    fechaCompletado: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    resultados: {
        type: DataTypes.JSON,
        allowNull: true,
    },
});

Test.belongsTo(Cuestionario, { foreignKey: 'cuestionarioId', as: 'cuestionario' });
Test.belongsTo(User, { foreignKey: 'pacienteId', as: 'paciente' });

module.exports = Test;
