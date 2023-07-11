const mongoose = require("mongoose");

const adminbookSchema = new mongoose.Schema({
    allbooks:[
       {
        email:{
            type: String,
            required: true
        },
        username:{
            type: String,
            required: true,
        },
            bookname:{
                type:String,
                required: true,
            },
            genre:{
                type:String,
                required: true,
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
                
            },
            issuedate:{
                type:String,
                required: true,
              
            },
            issuetime:{
                type:String,
                required: true,
                
            },
            returndate:{
                type:String,
                
            },
            bookid:{
                type:String,
                required: true,
            }
        
        
        }]
    
 
});

const Admin = mongoose.model("Admin", adminbookSchema);
module.exports = Admin;
