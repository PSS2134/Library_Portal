const mongoose = require('mongoose');

const bookSchema= new mongoose.Schema({
    email:{
        type:String,
        required: true,
    },
    book:[{
        id:{
        type:Number,
        required: true,
    },
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
        required: true,
    }}]
})

const Book=mongoose.model('Book',bookSchema);
module.exports = Book;