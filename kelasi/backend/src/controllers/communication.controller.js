async function listMessages(req, res) {
  return res.json({ items: [], total: 0 });
}

async function sendMessage(req, res) {
  return res.status(201).json({ id: 'stub-message', ...req.body });
}

module.exports = { listMessages, sendMessage };
