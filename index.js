const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors({
  origin: ["http://localhost:3000", "https://codewithchris.vercel.app"],
  credentials: true
}));
app.use(express.json());

const restAssured = require('./RestAssured/restAssured.json');
const cypress = require('./Cypress/cypress.json');
app.get('/api/cypress', (req, res) => {
  res.json(cypress);
});

app.get('/api/restAssured', (req, res) => {
  res.json(restAssured);
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
