const mongoose = require('mongoose');

const bookSchema= new mongoose.Schema({
    email:{
        type:String,
        required: true,
    },
    book:[{
    name:{
        type:String,
        required: true,
    },
    author:{
        type:String,
        required: true,
    },
    genre:{
        type:String,
        required: true,
    },
    url:{
        type:String,
        
    },
    issued:{
        type:Number,
        required: true,
    },
    returned:{
        type:Number,
        required:true,
    },
    return_requested:{
        type:Number,
        required:true,
    },
    issuedate:{
        type:String,
      
    },
    issuetime:{
        type:String,
        
    },
    returndate:{
        type:String,
        
    },
    id:{
        type:String,
        required: true,
    },
}]
},)

const Book=mongoose.model('Book',bookSchema);
module.exports = Book;