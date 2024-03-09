// i will have product.js for product related logic
// here i now i am adding the code from admin.js
// we need to export this function in the product controller file and to do this we have to multiple exports
// getAddProduct the name is on u u can keep anything

exports.getAddProduct = (req, res, next) => {
  // normal middleware function expressjs understand
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};
const products = [];
// brand new export
exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title }); //but where is product array simple go in admin.js and cut it out const products = []; and paste here
  res.redirect("/");
};
