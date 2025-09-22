const express = require('express');
const auth = require('../middleware/auth');
const ctrl = require('../controllers/class.controller');

const router = express.Router();

router.get('/', auth, ctrl.listClasses);
router.post('/', auth, ctrl.createClass);
router.get('/:id', auth, ctrl.getClassById);
router.put('/:id', auth, ctrl.updateClass);
router.delete('/:id', auth, ctrl.deleteClass);

module.exports = router;
