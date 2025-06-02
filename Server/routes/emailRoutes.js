const express = require('express');
const router = express.Router();
const { sendConfirmationEmail } = require('../controllers/emailController');
router.post('/send', sendConfirmationEmail);
module.exports = router;
