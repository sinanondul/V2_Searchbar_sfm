const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors')
const Product = require("./models/Product");
require("dotenv/config");

app.use("/static", express.static('./static/'));
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});

mongoose.connect(process.env.DBURI);


app.get("/products", async (request, response) => {
  try {
      var result = await  Product.find({
        "title":/.*ebe.*/i
      })
      response.send(result);
  } catch (error) {
      response.status(500).send(error);
  }
});