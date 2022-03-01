require('dotenv').config();

const path = require('path');
const express = require('express');
const connect = require('./database/connect');
const { errorMiddleware } = require('./middleware/errorHandler');
const goalRoutes = require('./routes/goalRoutes');
const userRoutes = require('./routes/userRoutes');

connect();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use('/api/goals', goalRoutes);
app.use('/api/users', userRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '..', 'frontend', 'build', 'index.html')));
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server start at: http://localhost.com:${PORT}`);
})