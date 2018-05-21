const express = require('express');
const router = express.Router();
const Category = require('../models/categories');
const mongoose = require('mongoose');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, './uploads/categories')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + file.originalname)
    }
});
const fileFilter = (req, file, cb) => {
    //reject a file
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true);
    } else{
        cb(new Error('Please use either JPEG or PNG files under 1mb.'), false);
    }
}
const upload = multer({ 
    storage: storage, 
    limits:{
        fileSize: 1024 * 1024 
    },
    fileFilter: fileFilter
})


router.get('/', (req,res,next) => {
    Category.find()
           .select('title background featuredImage float content _id')
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
                        request: {
                            type:'GET',
                            url:'http://localhost:3001/categories/' + doc._id
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
});

router.post('/', upload.single('featuredImage'), (req,res,next) => {
    console.log(req.file);
    const category = new Category({
         _id: new mongoose.Types.ObjectId(),
         title: req.body.title,
         background: req.body.background,
         featuredImage: req.file.path,
         float: req.body.float,
         content: req.body.content
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
                        request: {
                            type:'GET',
                            url:'http://localhost:3001/categories/' + result._id
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


});

router.get('/:categoryId', (req, res, next) => {
    const id = req.params.categoryId;
    Category.findById(id)
    .select('title background featuredImage float content _id')
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
});

router.patch('/:categoryId', (req, res, next) => {
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
  
});

router.delete('/:categoryId', (req, res, next) => {
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
  
});

module.exports = router;


