const jwt = require ('jsonwebtoken')

const jwtMiddleware = (req,res,next)=>{
  try{

    const token = req.headers['authorization'].split(" ")[1]
    if(token){
      const jwtResponse = jwt.verify(token,"aiswarya@12")
      req.payload = jwtResponse.userId
      next()
    }else{
      res.status(406).json("token is not available")
    }
  }catch{
    res.status(401).json("authorization failed please login")
  }
}

module.exports = jwtMiddleware