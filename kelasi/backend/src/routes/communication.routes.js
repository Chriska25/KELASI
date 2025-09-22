const express = require('express');
const auth = require('../middleware/auth');
const ctrl = require('../controllers/communication.controller');

const router = express.Router();

router.get('/', auth, ctrl.listMessages);
router.post('/', auth, ctrl.sendMessage);

module.exports = router;
