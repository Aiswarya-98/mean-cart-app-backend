const cartlist = require('../model/cartModel')


// add to cart

exports.addToCartController = async(req,res)=>{
  const {id,title,price,description,category,image,rating}=req.body
  const userId = req.payload

  try{
    const existingProduct = await cartlist.findOne({id,userId})
   
    // if(existingProduct){
    //   res.status(406).json("products already exists")
    // }else{
      const newCartProduct = new cartlist({
        id,title,price,description,category,image,rating,userId
      })
      await newCartProduct.save()
      res.status(200).json(newCartProduct)
    // }

  }catch(err){
    res.status(401).json(err)
  }
}


// get from cart

// get

exports.getcartlistController = async (req,res)=>{
  const userId = req.payload
  try{

    const allProducts = await cartlist.find({userId})
    res.status(200).json(allProducts)

  }catch(err){

    res.status(401).json(err)

  }
}


// remove from cart



exports.removecartlistController = async (req,res)=>{
  const {id} = req.params
  try{

    const removeProduct = await cartlist.findByIdAndDelete({_id:id})
    res.status(200).json(removeProduct)
  }catch(err){

    res.status(401).json(err)

  }
}
