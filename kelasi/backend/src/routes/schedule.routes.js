const express = require('express');
const auth = require('../middleware/auth');
const ctrl = require('../controllers/schedule.controller');

const router = express.Router();

router.get('/', auth, ctrl.listSchedules);
router.post('/', auth, ctrl.createSchedule);

module.exports = router;
