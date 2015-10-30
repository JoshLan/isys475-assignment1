// JavaScript File

var mongoose = require('mongoose');

var BallotSchema = new mongoose.Schema({
  _id: String,
  value: Number,
}, 
{
  collection: 'total'
});

mongoose.model('Ballots', BallotSchema);
