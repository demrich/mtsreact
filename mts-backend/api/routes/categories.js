const express = require('express');
const router = express.Router();
const Category = require('../models/categories');
const multer = require('multer');
const checkAuth = require('../middleware/check-auth');
const categoriesController = require('../controllers/categories');
const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, './uploads/categories')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + file.originalname)
    }
})

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

router.get('/',categoriesController.categories_get_categories);
router.post('/',checkAuth, upload.fields([{name: 'featuredImage', maxCount: 1}, {name: 'background', maxCount: 1}]), categoriesController.categories_post_category);
router.get('/:categoryId', categoriesController.categories_get_category);
router.patch('/:categoryId',checkAuth, categoriesController.categories_edit_category);
router.delete('/:categoryId',checkAuth, categoriesController.categories_delete_category);

module.exports = router;


