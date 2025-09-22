require('dotenv').config();

const APP_NAME = 'Kelasi';
const APP_VERSION = process.env.npm_package_version || '0.1.0';
const PORT = process.env.PORT || 4000;
const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_change_me';

module.exports = {
  APP_NAME,
  APP_VERSION,
  PORT,
  JWT_SECRET,
};

