const { signToken } = require('../config/auth');

async function login(req, res) {
  const { email } = req.body;
  // Stubbed auth: accept any email/password. Replace with real user lookup.
  const token = signToken({ userId: 'stub-user', email });
  return res.json({ token, user: { id: 'stub-user', email } });
}

async function register(req, res) {
  const { name, email } = req.body;
  // Stubbed register: echo input
  return res.status(201).json({ id: 'stub-user', name, email });
}

async function me(req, res) {
  return res.json({ user: req.user });
}

module.exports = { login, register, me };

