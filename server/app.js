const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors')
const Product = require("./models/Product");
var path=require('path')  

require("dotenv/config");

app.use("/static", express.static('./static/'));
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});

mongoose.connect(process.env.DBURI,  { useNewUrlParser: true }, (err, res)=>{
  
  if(err) throw err;
  else 
  console.log("Connection Established!" );

});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/../client/index.html'));
});


app.get("/products/:searchVal", async (request, response) => {
  try {
      // const search='.*'+request.params.searchVal+'.*'
      const search=`.*${request.params.searchVal}.*`
      console.log(search)
      var result = await  Product.find({
        "title":{"$regex":search,"$options":"i"}
      })
      response.send(result);
  } catch (error) {
      response.status(500).send(error);
  }
});