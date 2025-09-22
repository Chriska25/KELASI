async function listClasses(req, res) {
  return res.json({ items: [], total: 0 });
}

async function createClass(req, res) {
  return res.status(201).json({ id: 'stub-class', ...req.body });
}

async function getClassById(req, res) {
  return res.json({ id: req.params.id });
}

async function updateClass(req, res) {
  return res.json({ id: req.params.id, ...req.body });
}

async function deleteClass(req, res) {
  return res.status(204).send();
}

module.exports = { listClasses, createClass, getClassById, updateClass, deleteClass };
