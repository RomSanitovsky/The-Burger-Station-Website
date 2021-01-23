const express = require('express');
const branchController = require('../controllers/branchController');
const authController = require('../controllers/authController');

const router = express.Router();




router
  .route('/')
  .get(branchController.getAllBranches)
  .post(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    branchController.createBranch
  );

router
  .route('/:id')
  .get(branchController.getBranch)
  .patch(
    authController.protect,
    authController.restrictTo('admin', 'user'),
    branchController.updateBranch
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'user'),
    branchController.deleteBranch
  );

module.exports = router;
