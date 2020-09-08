const express = require("express");
const Product = require('./models/Product') ;

const { json } = require("body-parser");
const router = express.Router();

//routes
// router.get("/products", (req, res) => {
//   res.send({some: 'ans'});
// });


router.get("/", async(req, res) => {
  const cursor = await Product.find()
  const ans= res.json(cursor);
});

router.get("/", (req, res) => {
     res.send({some: "ans"})
});


// Product.findOne({'title': 'Tanzimat Edebiyatı 2'}, function(err, product){
//   console.log('%s')
// });


router.get('/:productid',async (req, res)=>{
  try{
  const p1 = await Product.findById(req.params.productid)
  res.json(p1)
  }catch(err){

  }

});



module.exports = router;
