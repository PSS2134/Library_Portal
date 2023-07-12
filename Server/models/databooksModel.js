const mongoose = require('mongoose');
const databooksSchema= new mongoose.Schema({
    data:[
        {
            id:{
                type:String,
                required:true,
            },
            name:{
                type:String,
                required:true,
            },
            author:{
                type:String,
                required:true,
            },
            genre:{
                type:String,
                required:true,
            },
            summary:{
                type:String,
                required:true,
            },
            url:{
                type:String,
                default:"https://upittpress.org/wp-content/themes/pittspress/images/no_cover_available.png",
                required:true,
            },
            Available:{
                type:Boolean,
                required:true,
            }
        }
    ]
});

const Databook=mongoose.model('Databook',databooksSchema);
module.exports =Databook;