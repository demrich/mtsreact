const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const HeroesController = require('../controllers/heroes');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, './uploads/heroes')
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
        fileSize: 3000 * 3000 
    },
    fileFilter: fileFilter
})

router.get('/', HeroesController.heroes_get_heroes);
router.post('/', checkAuth, upload.single('heroImage'), HeroesController.heroes_post_hero);
router.get('/:heroId',HeroesController.heroes_get_hero );
router.patch('/:heroId', checkAuth, HeroesController.heroes_edit_hero);
router.delete('/:heroId', checkAuth, HeroesController.heroes_delete_hero);

module.exports = router;