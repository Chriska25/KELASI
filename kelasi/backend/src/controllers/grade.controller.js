async function listGrades(req, res) {
  return res.json({ items: [], total: 0 });
}

async function createGrade(req, res) {
  return res.status(201).json({ id: 'stub-grade', ...req.body });
}

module.exports = { listGrades, createGrade };
