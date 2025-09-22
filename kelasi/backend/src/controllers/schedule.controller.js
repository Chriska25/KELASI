async function listSchedules(req, res) {
  return res.json({ items: [], total: 0 });
}

async function createSchedule(req, res) {
  return res.status(201).json({ id: 'stub-schedule', ...req.body });
}

module.exports = { listSchedules, createSchedule };
