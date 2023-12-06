const mongoose = require('mongoose');
//connection to mongodb database
mongoose.connect("mongodb+srv://kulwinderskvbrgh:kulwinderskvbrgh@cluster0.y9kdwg9.mongodb.net/hospital_api_project?retryWrites=true&w=majority");

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to the db'));

db.once('open', function () {
  console.log("Successfully connected to the Database");
});

module.exports = db;
