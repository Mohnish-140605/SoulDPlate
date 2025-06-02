const nodemailer = require('nodemailer');

exports.sendConfirmationEmail = async (req, res) => {
  const { email, subject, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  const info = await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject,
    text: message,
  });
  res.json({ success: true, info });
};
