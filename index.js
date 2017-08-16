const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const router = require('./router');
const cors = require('cors');

// DB Setup
mongoose.connect('mongodb://localhost:auth/auth', {
  socketTimeoutMS: 0,
  keepAlive: true,
  reconnectTries: 30
});

// App Setup
app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server Setup
const port = process.env.PORT || 3300;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: ', port);
