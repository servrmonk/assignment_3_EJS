const path = require("path");

const express = require("express");

// const rootDir = require("../util/path");
// const adminData = require("./admin");

// i can emport  product controller from product.js
const productController = require('../controllers/products')
const router = express.Router();
//the logic  here is typical controller logic
router.get("/",productController.getProducts );

module.exports = router;
