const mongoose = require('mongoose');
const Hero = require('../models/heroes');


exports.heroes_get_heroes = (req, res, next) => {
    Hero.find()
        .select('title heroImage button _id')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                heroes: docs.map(doc => {
                    return {
                        _id: doc._id,
                        title: doc.title,
                        heroImage: doc.heroImage,
                        button: doc.button,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:3001/heroes/' + doc._id
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

exports.heroes_post_hero = (req, res, next) => {
    console.log(req.file);
    const hero = new Hero({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        heroImage: req.file.path,
        button: req.body.button
    });
    hero.save()
        .then((result) => {
            console.log(result);
            res.status(201).json({
                message: 'Created Hero Successfully',
                createdHero: {
                    _id: result._id,
                    title: result.title,
                    heroImage: result.heroImage,
                    button: result.button,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3001/heroes/' + result._id
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

exports.heroes_get_hero = (req, res, next) => {
    const id = req.params.heroId;
    Hero.findById(id)
    .select('title heroImage button _id')
    .exec()
    .then(doc => {
        console.log("From Database", doc)
        if(doc) {
            res.status(200).json({
                Hero: doc,
                request: {
                    type:'GET',
                    description: 'My heroes',
                    url:'http://localhost:3001/heroes/'
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

exports.heroes_edit_hero = (req, res, next) => {
    const id = req.params.heroId
    const updateOps = {};
    for(const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Hero.update({_id: id}, { $set:updateOps})
    .exec()
    .then( result => {
        res.status(200).json({
            message: 'Hero Successfully Updated',
            request: {
                type:'GET',
                url:'http://localhost:3001/heroes/' + id
            }
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
        })
  
}

exports.heroes_delete_hero = (req, res, next) => {
    const id = req.params.heroId
    Hero.remove({_id: id})
    .exec()
    .then(result => {
        res.status(200).json({
            message: 'Hero Deleted',
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err})
    })
  
}