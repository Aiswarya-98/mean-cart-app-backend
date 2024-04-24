const express = require ('express')
const productController = require ('../controller/productController')
const userController = require('../controller/userController')

const router = new express.Router()

// getallproducts

router.get('/allproducts',productController.getAllProductsController)


// register

router.post('/register',userController.registerController)


// login

router.post('/login',userController.loginController)
module.exports = router