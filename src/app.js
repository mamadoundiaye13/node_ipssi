const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const hostname = '0.0.0.0';
const port = 3000;

// Options pour enlever les warnings
const mongooseParams = {
  useUnifiedTopology : true,
  useNewUrlParser: true,
  useCreateIndex: true,
};

mongoose.connect('mongodb://mongo/sqynode', mongooseParams);

// parse various different custom JSON types as JSON
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({ type: 'application/*+json' }));

app.use(express.static('public'));

const postRoutes = require('./api/routes/postRoutes');
postRoutes(app);

const commentRoutes = require('./api/routes/commentRoutes');
commentRoutes(app);

app.listen(port, hostname);