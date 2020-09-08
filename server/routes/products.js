const express=require('express');
const router = express.Router();
const Product = require("../models/Product");

router.get("/", async(req, res)=>{
    try{
        var content = await Product.find();
        res.json(content)
    }catch(err){
        res.json({message: err})        
    }
})

router.get("/:searchVal", async (request, response) => {
    try{
        const search=`.*${request.params.searchVal}.*`;
        response.json( await  Product.find ({"brand":{"$regex":search,"$options":"i"}}));
        response.json(await  Product.find ({"title":{"$regex":search,"$options":"i"}}));
        response.json(await  Product.find ({"categories":{"$regex":search,"$options":"i"}}));
    }catch (err) {
        response.json({message: err})
    }
  });

  module.exports = router;