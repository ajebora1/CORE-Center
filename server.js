const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
// delete this later
const cors = require('cors');

// const { application } = require('express');

require('dotenv').config();
require('./config/database');

const app = express();

 app.use(logger('dev'));
 app.use(express.json());
 //delete later
 app.use(cors());

 app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
 app.use(express.static(path.join(__dirname, 'build')));

 app.use(require('./config/checkToken'));

 app.use('/api/users', require('./routes/api/users'));
 app.use('/api/comments', require('./routes/api/comments'))
 app.use('/api/donors', require('./routes/api/donors'))

 app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

 const port = process.env.PORT || 3001;

 app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
  });

