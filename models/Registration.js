const mongoose = require('mongoose');
const registrationSchemer = new mongoose.Schema({
    fullName:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        unique:true
    }
});

module.exports = mongoose.model('Registration', registrationSchemer)
