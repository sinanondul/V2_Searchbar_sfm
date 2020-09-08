
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
    }, 
    links: String

}, {collection:'collection2'});
var Product = mongoose.model('Products', productSchema, 'collection2');
module.exports = Product;