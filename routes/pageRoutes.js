// routes/pageRoutes.js

const express = require('express');
const router = express.Router();

const team = [
  { name: 'Natasja Nell', role: 'Team Lead' },
  { name: 'Tshifiwa Makhani', role: 'Frontend Developer' },
  { name: 'Nhlanhla Mbatha', role: 'Backend Developer' },
  { name: 'Orabile Mahlaba', role: 'Data Manager' }
];

const events = [
  { title: 'Community Clean-Up', date: '2025-06-01', location: 'Main Park', image: 'cleanup.jpg' },
  { title: 'Tech Talk', date: '2025-06-10', location: 'Main City', image: 'talk.jpg' }
];

const messages = [];

router.get('/', (req, res) => {
  res.render('pages/home', {events});
});

router.get('/about', (req, res) => {
  res.render('pages/about', { team });
});

router.get('/events', (req, res) => {
  res.render('pages/events', { events });
});

router.get('/contact', (req, res) => {
  res.render('pages/contact');
});

router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  messages.push({ name, email, message });
  res.redirect('/thankyou');
});

router.get('/thankyou', (req, res) => {
  res.render('pages/thankyou');
});

module.exports = router;
