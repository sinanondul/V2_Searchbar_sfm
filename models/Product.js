
const mongoose = require ('mongoose')
var Schema = mongoose.Schema;

const productSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    categories: {
        type: String,
        required: true
    }, 
    imglinks: String,
    prices: String,
    descriptions1: String,
    brand: {
        type: String,
        required: true
    } 

}, {collection:'collection1'});
var Product = mongoose.model('Products', productSchema, 'collection1');
module.exports = Product;