const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Cuestionario = sequelize.define('Cuestionario', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  preguntas: {
    type: DataTypes.JSON,
    allowNull: false,
  },
}, {
  timestamps: true, // Esto agrega columnas `createdAt` y `updatedAt`
});

module.exports = Cuestionario;
