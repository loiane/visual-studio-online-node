const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const mongoUri = 'mongodb://localhost/tutorials';

function connect() {
  mongoose.set('debug', true);
  return mongoose.connect(mongoUri, { useNewUrlParser: true });
}

module.exports = {
  connect,
  mongoose
};
