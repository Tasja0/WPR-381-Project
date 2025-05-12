// routes/pageRoutes.js

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/home')
});

router.get('/about', (req, res) => {
    res.render('pages/about')
});

router.get('/events', (req, res) => {
    res.render('pages/events')
});

router.get('/contact', (req, res) => {
    res.render('pages/contact')
});

router.get('/thankyou', (req, res) => {
    res.render('pages/thankyou')
});

module.exports = router;
