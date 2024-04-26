
const mongoose = require('mongoose')

const cartlistSchema = mongoose.Schema({

  // id:{
  //   type:Number,
  //   required:true,
  //   unique:true
  // },

  // title:{
  //   type:String,
  //   required:true
  // },

  // price:{
  //   type:Number,
  //   required:true
  // },

  // image:{
  //   type:String,
  //   required:true
  // },

  // userId:{
  //   type:String,
  //   required:true
  // }

  id:{
    type:Number,
    required:true,
    unique:true
  },

  title:{
    type:String,
    required:true
  },

  price:{
    type:Number,
    required:true
  },

  description:{
    type:String,
    required:true
  },

  category:{
    type:String,
    required:true
  },

  image:{
    type:String,
    required:true
  },
  
  rating:{
    rate:{
      type:Number,
      required:true
    },
    count:{
      type:Number,
      required:true
    },
  },

  userId:{
    type:String,
    required:true
  }


})

const cartlist = mongoose.model("cartlist",cartlistSchema)
module.exports=cartlist
