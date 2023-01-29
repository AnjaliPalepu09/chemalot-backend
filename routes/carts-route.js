const express = require('express');
const CartsRoute = express.Router();
const cartsController = require('../controller/carts-controller')

CartsRoute.post('/addCart',cartsController.saveCart);
CartsRoute.get('/',cartsController.getCarts)


module.exports = CartsRoute;
