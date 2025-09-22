const { Sequelize } = require('sequelize');

const databaseName = process.env.DB_NAME || 'kelasi';
const databaseUser = process.env.DB_USER || 'postgres';
const databasePassword = process.env.DB_PASS || 'postgres';
const databaseHost = process.env.DB_HOST || 'localhost';
const databasePort = Number(process.env.DB_PORT || 5432);

const sequelize = new Sequelize(databaseName, databaseUser, databasePassword, {
  host: databaseHost,
  port: databasePort,
  dialect: 'postgres',
  logging: process.env.DB_LOGGING === 'true' ? console.log : false,
});

module.exports = { sequelize };

