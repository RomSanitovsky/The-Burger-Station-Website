const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController.js');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);
//test
router.use(authController.protect);

router.patch('/updateMyPassword', authController.updatePassword);

router.get('/me/:id', userController.getMe, userController.getUser);
router.patch('/updateMe/:id', userController.updateUser);
router.delete('/deleteMe', userController.deleteMe);

//router.use(authController.restrictTo('user'));

router
  .route('/')
  .get(authController.restrictTo('admin'), userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(authController.restrictTo('admin'), userController.getUser)
  .patch(authController.restrictTo('admin'), userController.updateUser)
  .delete(authController.restrictTo('admin'), userController.deleteUser);

module.exports = router;
