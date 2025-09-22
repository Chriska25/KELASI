const express = require('express');
const auth = require('../middleware/auth');
const ctrl = require('../controllers/payment.controller');

const router = express.Router();

router.get('/', auth, ctrl.listPayments);
router.post('/', auth, ctrl.createPayment);

module.exports = router;
