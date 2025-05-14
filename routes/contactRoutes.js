const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// GET contact page
router.get('/', (req, res) => {
  res.render('pages/contact', { 
    messages: {
      success: req.flash('success'),
      error: req.flash('error')
    }
  });
});

// POST contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      req.flash('error', 'All fields are required');
      return res.redirect('/contact');
    }

    // Email transport 
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false // For local testing only
      }
    });

    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_RECIPIENT,
      replyTo: email,
      subject: `New message from ${name}`,
      text: message,
      html: buildEmailTemplate(name, email, message)
    });

    req.flash('success', 'Message sent successfully!');
    res.redirect('/contact');
    
  } catch (error) {
    console.error('Email failed:', error);
    req.flash('error', `Failed to send message: ${error.message}`);
    res.redirect('/contact');
  }
});

// Helper function for email HTML
function buildEmailTemplate(name, email, message) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px;">
      <h2 style="color: #333;">New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Message:</strong></p>
      <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
        ${message.replace(/\n/g, '<br>')}
      </div>
    </div>
  `;
}

module.exports = router;