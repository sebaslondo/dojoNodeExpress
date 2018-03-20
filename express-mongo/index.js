const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const morgan = require('morgan');

const app = express();
const routes = require('./routes/api_v2');

// db
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/people', {
  useMongoClient: true
}).then(() => console.log('conected to db'))
  .catch((err) => console.log(err));

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json())
// routes
app.use('/api', routes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

//error handler
app.use((err, req, res, next) => {
  res.status(422).send({
    error: err.message
  })
});

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`)
});
