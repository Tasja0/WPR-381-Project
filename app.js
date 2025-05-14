const express = require('express');
const app = express();
const path = require('path');

const events = require('./data/events');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));


app.get('/events', (req, res) => {
  res.render('events', { events });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
