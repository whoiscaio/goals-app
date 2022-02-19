const express = require('express');

const router = express.Router();

router.get('/goals', (req, res) => {
  res.send('<h1>GET /goals</h1>')
});

module.exports = router;