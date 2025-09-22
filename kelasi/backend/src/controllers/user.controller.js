// Placeholder controller
async function getProfile(req, res) {
  return res.json({ id: req.user?.userId || 'stub-user', email: req.user?.email || 'stub@example.com' });
}

module.exports = { getProfile };
