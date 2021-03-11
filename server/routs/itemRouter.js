const express = require('express');
const ItemController = require('../controllers/itemController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(ItemController.getAllItems)
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    ItemController.createItem
  );

router.route('/itemTypeCounts/').get(ItemController.getItemTypeCountes);

router
  .route('/:id')
  .get(ItemController.getItem)
  .patch(
    authController.protect,
    authController.restrictTo('admin'),
    ItemController.updateItem
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    ItemController.deleteItem
  );

module.exports = router;
