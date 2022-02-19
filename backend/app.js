require('dotenv').config();

const express = require('express');
const connect = require('./database/connect');
const goalRoutes = require('./routes/goalRoutes');

connect();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use('/api/goals', goalRoutes);

app.listen(PORT, () => {
  console.log(`Server start at: http://localhost.com:${PORT}`);
})