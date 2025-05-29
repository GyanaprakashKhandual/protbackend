const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const restAssured = require('./RestAssured/restAssured.json');

app.get('/api/restAssured', (req, res) => {
  res.json(restAssured);
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
