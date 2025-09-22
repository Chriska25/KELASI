const { sequelize } = require('../config/database');

async function initDatabase() {
  try {
    await sequelize.authenticate();
    if (process.env.DB_SYNC === 'true') {
      await sequelize.sync({ alter: false });
    }
    // eslint-disable-next-line no-console
    console.log('Database connected');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Database connection failed:', error.message);
    if (process.env.DB_REQUIRED === 'true') {
      process.exit(1);
    }
  }
}

module.exports = { sequelize, initDatabase };
