const express = require('express');
const { loginController } = require('../controllers/authController');
const validate = require('../middlewares/validate');
const { loginValidation } = require('../validations/authValidation');

const router = express.Router();

router.post('/login', validate(loginValidation), loginController);

module.exports = router;
