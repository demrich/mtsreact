const Category = require('../models/categories');
const mongoose = require('mongoose');


exports.categories_get_categories = (req, res, next) => {
    Category.find()
        .select('title background featuredImage float content learnLink _id')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                categories: docs.map(doc => {
                    return {
                        _id: doc._id,
                        title: doc.title,
                        background: doc.background,
                        featuredImage: doc.featuredImage,
                        float: doc.float,
                        content: doc.content,
                        learnLink: doc.learnLink,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:3001/categories/' + doc._id
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
            });
        })
}

exports.categories_post_category = (req, res, next) => {
    console.log(req.file);
    const category = new Category({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        background: req.files['background'][0].path,
        featuredImage: req.files['featuredImage'][0].path,
        float: req.body.float,
        content: req.body.content,
        learnLink: req.body.learnLink
    });
    category.save()
        .then((result) => {
            console.log(result);
            res.status(201).json({
                message: 'Created Category Successfully',
                createdCategory: {
                    _id: result._id,
                    title: result.title,
                    background: result.background,
                    featuredImage: result.featuredImage,
                    float: result.float,
                    content: result.content,
                    learnLink: result.learnLink,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3001/categories/' + result._id
                    }
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

exports.categories_get_category = (req, res, next) => {
    const id = req.params.categoryId;
    Category.findById(id)
    .select('title background featuredImage float content learnLink _id')
    .exec()
    .then(doc => {
        console.log("From Database", doc)
        if(doc) {
            res.status(200).json({
                category: doc,
                request: {
                    type:'GET',
                    description: 'My Categories',
                    url:'http://localhost:3001/categories/'
                }
            });
        } else {
            res.status(404).json({message: 'Not found!'});

        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
        }
    );
}

exports.categories_edit_category = (req, res, next) => {
    const id = req.params.categoryId
    const updateOps = {};
    for(const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Category.update({_id: id}, { $set:updateOps})
    .exec()
    .then( result => {
        res.status(200).json({
            message: 'Category Successfully Updated',
            request: {
                type:'GET',
                url:'http://localhost:3001/categories/' + id
            }
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
        })
  
}

exports.categories_delete_category = (req, res, next) => {
    const id = req.params.categoryId
    Category.remove({_id: id})
    .exec()
    .then(result => {
        res.status(200).json({
            message: 'Category Deleted',
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err})
    })
  
}