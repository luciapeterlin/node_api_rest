const productsModel = require('../models/productsModel');

module.exports = {
    getAllProducts: async function(req, res, next){
        try{
            const productos = await productsModel.find()
            res.status(201).json(productos);
        } catch(e){
            console.log(e);
            res.status(404).json(e);
        }
    },
    getProductById: async function(req, res, next){
        try{
            const document = await productsModel.findById(req.params.id)
            res.status(201).json(document);
        } catch(e){
            console.log(e);
            res.status(404).json(e);
        }
    },
    editProduct: async function(req, res, next){
        try{
            const document = await productsModel.updateOne({_id: req.params.id}, req.body)
            res.status(201).json(document);
        }  catch(e){
            console.log(e);
            res.status(404).json(e);
        }
    },
    deleteProduct: async function(req, res, next){
        try{
            const document = await productsModel.deleteOne({_id: req.params.id})
            res.status(201).json(document);
        }  catch(e){
            console.log(e);
            res.status(404).json(e);
        }
    },
    addNewProduct: async function(req, res, next){
        try{
            const product = new productsModel({
                name: req.body.name,
                price: req.body.price,
                description: req.body.description
            })
            const document = await product.save();
            res.status(201).json(document);
        }
        catch(e){
            console.log(e);
            res.status(404).json(e);
        }
    }
}