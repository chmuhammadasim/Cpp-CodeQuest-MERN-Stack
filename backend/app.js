const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/cpp_codequest', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to C++ CodeQuest');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
