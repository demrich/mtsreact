const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const ProductsController = require('../controllers/products');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, './uploads/products')
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

router.get('/', ProductsController.products_get_all);
router.post('/', checkAuth, upload.single('imageURL'), ProductsController.products_create_product);
router.get('/:productId',ProductsController.products_find_product );
router.patch('/:productId', checkAuth, ProductsController.products_edit_product);
router.delete('/:productId', checkAuth, ProductsController.products_delete_product);

module.exports = router;