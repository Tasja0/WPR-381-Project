const express = require('express');
const router = express.Router();

const team = [
  { name: 'Natasja Nell', role: 'Team Lead' },
  { name: 'Tshifhiwa Makhani', role: 'Frontend Developer' },
  { name: 'Nhlanhla Mbatha', role: 'Backend Developer' },
  { name: 'Orabile Mahlaba', role: 'Data Manager' }
];

const events = [
  { 
    title: 'Community Clean-Up', 
    date: '2025-06-01', 
    location: 'Main Park', 
    image: 'pexels-lagosfoodbank-8060302.jpg',
    time: '09:00 AM' 
  },
  { 
    title: 'Tech Walk', 
    date: '2025-06-10', 
    location: 'Main City', 
    image: 'pexels-thirdman-7656743.jpg',
    time: '02:00 PM' 
  },
  { 
    title: 'Youth Coding Workshop', 
    date: '2025-06-15', 
    location: 'Community Center', 
    image: 'pexels-vanessa-loring-7869229.jpg', 
    time: '10:00 AM' 
  },
  { 
    title: 'Charity Fundraiser Gala', 
    date: '2025-06-20', 
    location: 'Grand Hotel', 
    image: 'pexels-cottonbro-3171770.jpg', 
    time: '07:00 PM',
    description: 'Black tie optional' 
  },
  { 
    title: 'Health & Wellness Fair', 
    date: '2025-06-25', 
    location: 'City Square', 
    image: 'pexels-mralpha-23625642.jpg',
    time: '08:00 AM - 04:00 PM' 
  },
  { 
    title: 'Entrepreneur Networking', 
    date: '2025-07-05', 
    location: 'Innovation Hub', 
    image: 'pexels-rethaferguson-3810792.jpg',
    time: '05:30 PM' 
  },
  { 
    title: 'Art Exhibition Opening', 
    date: '2025-07-12', 
    location: 'City Art Gallery', 
    image: 'pexels-prismattco-2372978.jpg',
    time: '06:30 PM' 
  },
  { 
    title: 'Sustainable Living Seminar', 
    date: '2025-07-20', 
    location: 'Green Spaces Center', 
    image: 'pexels-miami302-32034604.jpg',
    time: '11:00 AM' 
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
  console.log(messages);
  res.redirect('/thankyou?name=' + encodeURIComponent(name));
});

router.get('/thankyou', (req, res) => {
  res.render('pages/thankyou', {
    name: req.query.name,
    currentYear: getCurrentYear()
  });
});

module.exports = router;