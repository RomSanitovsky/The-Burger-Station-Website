const express = require('express');
const branchController = require('../controllers/branchController');
const authController = require('../controllers/authController');

const router = express.Router();




router
  .route('/')
  .get(branchController.getAllBranches)
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    branchController.createBranch
  );

router.route('/branchByDistricts/').get(branchController.getBranchByDistrict);

router
  .route('/:id')
  .get(branchController.getBranch)
  .patch(
    authController.protect,
    authController.restrictTo('admin'),
    branchController.updateBranch
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    branchController.deleteBranch
  );

module.exports = router;
