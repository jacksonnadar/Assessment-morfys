const express = require('express');
const app = express();
const server = require('http').createServer(app);
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const cookieParser = require('cookie-parser');

const logger = require('./middleware/logger');

const PORT = process.env.PORT || 8080;
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
mongoose.connect(process.env.DATABASE_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connected to moongo'));

app.use(logger);
app.get('/', (req, res) => {
  res.send('hello');
});

app.use('/users', require('./router/usersRouts'));

server.listen(PORT, () => console.log('server connected on ' + PORT));
