const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/users');

router.post('/signup', (req, res, next) => {
    User.find({
            username: req.body.username
        })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: "Username already exists."
                })
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            username: req.body.username,
                            password: hash
                        });
                        user.save()
                            .then(result => {
                                console.log(result);
                                res.status(201).json({
                                    message: "User Created",
                                });
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({
                                    error: err
                                })
                            });
                    }
                })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
});


router.delete('/:userId', (req, res, next) => {
    const id = req.params.userId
    User.remove({_id: id})
    .exec()
    .then(result => {
        res.status(200).json({
            message: 'User deleted',
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err})
    })
  
});
module.exports = router;
