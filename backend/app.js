require('dotenv').config();

const express = require('express');
const goalRoutes = require('./routes/goalRoutes');

const PORT = process.env.PORT || 3000;

const app = express();
app.use('/api/goals', goalRoutes);

app.listen(PORT, () => {
  console.log(`Server start at: http://localhost.com:${PORT}`);
})