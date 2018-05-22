const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const usersController = require('../controllers/users');

///Get All Users
router.get('/users', checkAuth, usersController.users_get_users);
/// Sign Up
router.post('/signup', checkAuth, usersController.users_signup);
//Sign-in
router.post('/login', usersController.users_signin);
// Delete User
router.delete('/:userId', checkAuth, usersController.users_delete_user);

module.exports = router;
