const Product = require('../models/products');
const mongoose = require('mongoose');

exports.products_get_all = (req, res, next) => {
    Product.find()
        .select('_id name price cartLink imageURL productURL sku category type')
        .populate('category', 'title')
        .then(docs => {
            const response = {
                count: docs.length,
                products: docs.map(doc => {
                    return {
                        _id: doc._id,
                        name: doc.name,
                        price: doc.price,
                        cartLink: doc.cartLink,
                        imageURL: doc.imageURL,
                        productURL: doc.productURL,
                        sku: doc.sku,
                        category: doc.category,
                        type: doc.type,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:3001/products/' + doc._id
                        }
                    }
                })
            };
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
}

exports.products_create_product = (req, res, next) => {
    const product = new Product({
        _id: mongoose.Types.ObjectId(),
        name:  req.body.name,
        price:  req.body.price,
        cartLink: req.body.cartLink,
        imageURL: req.file.path,
        productURL: req.body.productURL,
        sku: req.body.sku,
        category: req.body.categoryId,
        type: req.body.type
    });
    product.save()
         .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Product Stored",
                createdProduct: {
                      _id: result._id,
                      name: result.name,
                      price: result.price,
                      cartLink: result.cartLink,
                      imageURL: result.imageURL,
                      productURL: result.productURL,
                      sku: result.sku,
                      category: result.category,
                      type: result.type
                },
                request: {
                    type: 'GET',
                    url:'http://localhost:3001/products/' + result._id
                }
            });
         })
         .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
}

exports.products_find_product = (req, res, next) => {
    Product.findById(req.params.productId)
           .populate('category', 'title')
           .exec()
           .then(product => {
               res.status(200).json({
                   product: product,
                   request: {
                    type: 'GET',
                    url:'http://localhost:3001/products/'
                   }
               })
           })
           .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
}

exports.products_edit_product = (req, res, next) => {
    const id = req.params.productId
    const updateOps = {};
    for(const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Product.update({_id: id}, { $set:updateOps})
    .exec()
    .then( result => {
        res.status(200).json({
            message: 'Product Successfully Updated',
            request: {
                type:'GET',
                url:'http://localhost:3001/products/' + id
            }
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
        })
  
}

exports.products_delete_product = (req, res, next) => {
    const id = req.params.productId
    Product.remove({_id: id})
    .exec()
    .then(result => {
        res.status(200).json({
            message: 'Product Deleted',
            request: {
                type: 'POST',
                url:'http://localhost:3001/products/'
            }
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err})
    })
}