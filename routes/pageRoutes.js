const express = require('express');
const router = express.Router();

const team = [
  { name: 'Natasja Nell', role: 'Team Lead' },
  { name: 'Tshifiwa Makhani', role: 'Frontend Developer' },
  { name: 'Nhlanhla Mbatha', role: 'Backend Developer' },
  { name: 'Orabile Mahlaba', role: 'Data Manager' }
];

const events = [
  { 
    title: 'Community Clean-Up', 
    date: '2025-06-01', 
    location: 'Main Park', 
    image: 'cleanup.jpg',
    time: '09:00 AM' 
  },
  { 
    title: 'Tech Talk', 
    date: '2025-06-10', 
    location: 'Main City', 
    image: 'talk.jpg',
    time: '02:00 PM' 
  }
];

const messages = [];

// Helper function to get current year
const getCurrentYear = () => new Date().getFullYear();

// Route handlers
router.get('/', (req, res) => {
  res.render('pages/home', {
    events: events.slice(0, 3), // Show first 3 events on home
    currentYear: getCurrentYear()
  });
});

router.get('/about', (req, res) => {
  res.render('pages/about', { 
    team,
    currentYear: getCurrentYear() 
  });
});

router.get('/events', (req, res) => {
  res.render('pages/events', { 
    events,
    currentYear: getCurrentYear()
  });
});

router.get('/contact', (req, res) => {
  res.render('pages/contact', {
    currentYear: getCurrentYear()
  });
});

router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  messages.push({ name, email, message, date: new Date() });
  res.redirect('/thankyou?name=' + encodeURIComponent(name));
});

router.get('/thankyou', (req, res) => {
  res.render('pages/thankyou', {
    name: req.query.name,
    currentYear: getCurrentYear()
  });
});

module.exports = router;