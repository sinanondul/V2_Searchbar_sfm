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
        const x = await Product.find({$or:[{"title":{"$regex":search,"$options":"i"}},
        {"categories":{"$regex":search,"$options":"i"}},
         {"brand":{"$regex":search,"$options":"i"}}]}, 'title categories brand imglinks link')
        var t = response.send(x);
        //console.log(x)
        return x
        
    }catch (err) {
        response.status(500).end();
    }
  });

  module.exports = router;