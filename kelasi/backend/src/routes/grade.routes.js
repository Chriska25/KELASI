const express = require('express');
const auth = require('../middleware/auth');
const ctrl = require('../controllers/grade.controller');

const router = express.Router();

router.get('/', auth, ctrl.listGrades);
router.post('/', auth, ctrl.createGrade);

module.exports = router;
