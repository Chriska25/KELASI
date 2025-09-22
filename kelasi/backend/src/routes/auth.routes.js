const express = require('express');
const { Joi, validate } = require('../middleware/validation');
const authMiddleware = require('../middleware/auth');
const authController = require('../controllers/auth.controller');

const router = express.Router();

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const registerSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

router.post('/login', validate(loginSchema), authController.login);
router.post('/register', validate(registerSchema), authController.register);
router.get('/me', authMiddleware, authController.me);

module.exports = router;

