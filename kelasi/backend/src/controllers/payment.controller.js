async function listPayments(req, res) {
  return res.json({ items: [], total: 0 });
}

async function createPayment(req, res) {
  return res.status(201).json({ id: 'stub-payment', ...req.body });
}

module.exports = { listPayments, createPayment };
