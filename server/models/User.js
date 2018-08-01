const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  steamName: {
    type: String,
    unique: true,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  available : {
    type : Boolean,
    default: false
  },
  
  rank: {
    type: String,
    required: true
  }

});
const User = mongoose.model('Players', UserSchema);
module.exports = User;
