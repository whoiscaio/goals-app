const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('<h1>GET /goals</h1>');
});

router.get('/:id', (req, res) => {
  res.status(200).send('<h1>GET /goals/:id</h1>');
})

router.post('/', (req, res) => {
  res.status(200).send('<h1>POST /goals</h1>');
})

router.patch('/:id', (req, res) => {
  res.status(200).send('<h1>PATCH /goals/:id</h1>');
})

router.delete('/:id', (req, res) => {
  res.status(200).send('<h1>DELETE /goals/:id</h1>');
})

module.exports = router;