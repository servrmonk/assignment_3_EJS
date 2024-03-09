const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require('./controllers/error')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

// app.use((req, res, next) => {
// for that there is rendering 404 file , creted new controllers error.js, and now i cut this middleware and add in error.js file 
//   res.status(404).render("404", { pageTitle: "Page Not Found" });
// });

app.use(errorController.get404);//as a reference to the function

app.listen(3000);
