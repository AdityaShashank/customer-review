const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Customer = new Schema({
  name: {
    type: String
  },
  phoneNo: {
    type: Number
  },
  email: {
    type: String
  },
  rating:{
      type:String
  },
  feedback:{
      type:String
  }
},{
    collection: 'feedbacks'
});

module.exports = mongoose.model('Customer', Customer);