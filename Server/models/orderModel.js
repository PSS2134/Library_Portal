const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
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
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
