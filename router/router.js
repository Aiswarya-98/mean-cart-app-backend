const express = require ('express')
const productController = require ('../controller/productController')
const userController = require('../controller/userController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const wishlistController = require('../controller/wishlistController')
const cartController = require('../controller/cartController')
const router = new express.Router()

// getallproducts

router.get('/allproducts',productController.getAllProductsController)


// register

router.post('/register',userController.registerController)


// login

router.post('/login',userController.loginController)



// getaproduct

router.get('/view/product/:id',productController.getAProductController)

// addproducttowishlist

router.post('/addwishlist',jwtMiddleware,wishlistController.addToWishlistController)


// getproductfromwishlist

router.get('/getwishlist',jwtMiddleware,wishlistController.getWishlistController)


// removefromwishlist

router.delete('/removewishlist/:id',jwtMiddleware,wishlistController.removeWishlistController)


// addtocartlist
router.post('/addcartlist',jwtMiddleware,cartController.addToCartController)



// getproductfromcartlist

router.get('/getcartlist',jwtMiddleware,cartController.getcartlistController)

// removefromcartlist

router.delete('/removecartlist/:id',jwtMiddleware,cartController.removecartlistController)

module.exports = router