const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  email:{
    type:String,
    required:true,
  },
  username:{
    type:String,
    required:true,
  },
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  date:{
    type: String,
    required: true,
  },
  approved:{
    type:Boolean,
    default:false,
    required: true,
  }
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
