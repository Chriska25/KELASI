const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./constants');

const DEFAULT_EXPIRES_IN = '7d';

function signToken(payload, options = {}) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: DEFAULT_EXPIRES_IN, ...options });
}

function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

module.exports = { signToken, verifyToken, DEFAULT_EXPIRES_IN };

