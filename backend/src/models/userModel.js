const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombreCompleto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dni: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
        isNumeric: true,
        len: [8, 8], // Asegura que tenga exactamente 8 dígitos
    },
  },
fechaNac: {
    type: DataTypes.DATEONLY,
    allowNull: true,
},
numeroCelular: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
        isNumeric: true,
        len: [9, 9], // Asegura que tenga exactamente 9 dígitos
    },
},
  rol: {
    type: DataTypes.ENUM('paciente', 'psicologo', 'administrador'),
    defaultValue: 'paciente',
  },
});

module.exports = User;
