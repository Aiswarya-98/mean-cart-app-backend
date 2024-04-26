const products = require('../model/productModel')

// getAllProducts

exports.getAllProductsController = async (req,res)=>{
  try{
    const result = await products.find()
    res.status(200).json(result)
  }catch(err){
    res.status(401).json(err)
  }
}


// getaproduct

exports.getAProductController = async(req,res)=>{
  const {id} = req.params

  try{

    const result = await products.findOne({id})
    res.status(200).json(result)

  }catch(err){
    res.status(401).json(err)
  }
}