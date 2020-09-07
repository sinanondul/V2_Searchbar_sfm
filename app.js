const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors')
var path=require('path')  
//const Product = require('../models/Product') ;
require("dotenv/config");

app.use("/static", express.static('./static/'));
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});


//Import Routes
const productRouter = require("./routes/products");
const Product = require("./models/Product");
app.use("/products", productRouter);

//dc connection
const client = mongoose.connect(
  process.env.DBURI,
  { useNewUrlParser: true },
  () => console.log("connected to db!!")
);

// app.get('/', async (req, res) => {
//   const cursor = await Product.find()
//   //console.log(cursor)
//   const ans= res.json(cursor);
//   // ...
// })

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/static/index.html'));
});


// app.get("/", (req, res) => {
//   res.send('<form action="http://localhost:3000/products"'+ '><input type=' + '"submit"' +  'value="Go To Products"' + '/></form>');
// });



//middlewares
// app.use("/products", () => {
//   console.log("this.middleware");
// });
