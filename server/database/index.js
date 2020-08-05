const mongoose = require('mongoose');
const config = require('../config/dev');

exports.connect = () => {
  mongoose.connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true

  }, () => {
    console.log('Connected to DB')
  })
}
