const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User =new Schema(
    {
        name:{
            type:String
        },
      
        cin:{
            type:Number
        },
    }
)

module.exports = mongoose.model('user',User );