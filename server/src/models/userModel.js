const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  //  required: true
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, unique: true},
    password: {type: String},
    roles: { 
      type: [String], 
      enum: ['conducteur', 'locataire', 'admin'],  
    },
    profile: {
      "adress" : {type: String, required: true},
      "city" : {type: String, required: true},
      "telephone" : {type: Number, required: true},
    },
  });


  const User = new mongoose.model("User",userSchema);

  module.exports = User;  