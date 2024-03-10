const fs = require("fs");
const path = require("path");
const rootDir = require("../util/path");

// const products = [];
module.exports = class Product {
  constructor(t) {
    this.title = t;
  }
  save() {
    // products.push(this);
    // saving the data inside the file system
    const p = path.join(path.dirname(rootDir, "data", "products.json")); //ok that is product and to store a new product in  there first off all i need to get existing array of products so i will first of all read that file

    fs.readFile(p, (err, data) => {
      console.log("File content ", data); //we get undefined first time because it not exist for the first time by printing the error
      // console.log('err',err);
      let products = [];
      // if(err){
      // if i have an error than i simply create the new empty array because we have no existing product.json file  otherwise i want existing one by just creating emtpy array
      // }

      // if no error
      if (!err) {
        products = JSON.parse(data);
        console.log("Products ", products);
      }
      products.push(this); //here push my new code that is this onto it , insure that this refer to the class, we should use arrow function otherwise this will loose it's context   as i have used (err,data)=>{...

      fs.writeFile(p, JSON.stringify(products, err => {
        console.log("Error in stringify ", err);
      }));
    });
  }
  static fetchAll(cb) {
    const p = path.join(rootDir, "data", "products.json");
    fs.readFile(p, (err, data) => {
      // thisis async code, fetchall will return undefined so i will received callback
      if (err) {
        // return [];
        cb([]);
      }
      cb(JSON.parse(data));
    });
  }
};
