// i want to represent single  entity because on the end our core data is product

//  u can simply export constructor function here

const products = [];

module.exports = class Product {
  // shape of the product and create a constructor function
  constructor(t) {
    this.title = t;
  }
  //   save method, i will store product array
  save() {
    products.push(this); //this will refer to the object created based on the class that is exactly the array i wonna store it
  }
  //utility function
  static fetchAll() {
    return products;
  }
};
