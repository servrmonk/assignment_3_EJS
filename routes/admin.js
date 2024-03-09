const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

// import product controller
const productsController = require("../controllers/products"); //productsController bundles all the exported functions

const router = express.Router();

// const products = []; cut it out for product.js

// /admin/add-product => GET
router.get("/add-product", productsController.getAddProduct); //productsController.getAddProduct() we don't execute this function so don't add () paranthesis instead of that we just pass the reference of the function . we r just telling express through express router that it should productsController.getAddProduct take this functionand store it and whenever the request reaches the routes /add-product it should go ahead and executes. and now as i do we can repeat this for below code also

// /admin/add-product => POST
router.post("/add-product", productsController.postAddProduct);
// and twik this export also we don't have to export products longer because it is inside product.js
// exports.routes = router;
// exports.products = products;

module.exports = router;

// admin controller and product controller
