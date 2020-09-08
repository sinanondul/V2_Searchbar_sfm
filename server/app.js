const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors')
const Product = require("./models/Product");
var path=require('path');  
const { json } = require("body-parser");

require("dotenv/config");

app.use("/static", express.static('./static/'));
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
const productRoute = require('../server/routes/products');

app.use('/products',productRoute);

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});

mongoose.connect(process.env.DBURI,  { useNewUrlParser: true }, (err, res)=>{
  
  if(err) 
    throw err;
  else 
    console.log("Connection Established!" );

});

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname + '/../client/index.html'));
// });

app.get('/', function(req, res) {
  res.send("<form action=" + "'http://localhost:3000/products'>" +  "<input type='submit' value= 'List All Products' /></form>")
});



