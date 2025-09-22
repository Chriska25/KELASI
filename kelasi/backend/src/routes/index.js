const express = require('express');

const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');
const classRoutes = require('./class.routes');
const gradeRoutes = require('./grade.routes');
const scheduleRoutes = require('./schedule.routes');
const paymentRoutes = require('./payment.routes');
const communicationRoutes = require('./communication.routes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/classes', classRoutes);
router.use('/grades', gradeRoutes);
router.use('/schedule', scheduleRoutes);
router.use('/payments', paymentRoutes);
router.use('/messages', communicationRoutes);

module.exports = router;

