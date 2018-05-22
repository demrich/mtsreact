const User = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');


exports.users_get_users = (req, res, next) => {
    User.find()
        .select('_id username')
        .then(docs => {
            const response = {
                count: docs.length,
                users: docs.map(doc => {
                    return {
                        _id:doc._id,
                        username: doc.username
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

exports.users_signup = (req, res, next) => {
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
};

exports.users_signin = (req, res, next) => {
    //check to see if we have a user
        User.find({ username: req.body.username })
            .exec()
            .then(user => {
                if(user.length < 1) {
                    return res.status(401).json({
                        message: 'Auth failed'
                    })
                }
                //check if existing user 
                bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                    if(err) {
                        return res.status(401).json({
                            message: 'Auth failed'
                        });
                    }
                    if(result) {
                // Add token
                      const token = jwt.sign({
                            username:user[0].username,
                            userId: user[0]._id
                        }, 
                        process.env.JWT_KEY,
                        {
                            expiresIn: "1hr"
                        }
                    );
    
                        return res.status(500).json({
                            message: 'Auth Successful',
                            token: token
                        })
                    }
                    res.status(401).json({
                        message: 'Auth failed'
                    })
                })
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                })
            })
    }

exports.users_delete_user = (req, res, next) => {
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
  
}