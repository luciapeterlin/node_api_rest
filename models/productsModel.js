const mongoose = require('../config/mongodb');

const productSchema = mongoose.Schema({
    name:{type: String, required: [true, "Required"]},
    price:{type: Number, required: [true, "Required"]},
    description:String
})

module.exports = mongoose.model("products", productSchema)