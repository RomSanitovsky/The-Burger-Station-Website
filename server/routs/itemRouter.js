const express = require('express');
const ItemController = require('../controllers/itemController');
const authController = require('../controllers/authController');
const reviewRouter = require('./reviewRoutes');

const router = express.Router();


router.use('/:itemId/reviews', reviewRouter);


router
  .route('/')
  .get(ItemController.get)
  .post(
    authController.protect,
    authController.restrictTo('admin', 'user'),
    ItemController.createTour
  );

router
  .route('/:id')
  .get(ItemController.getTour)
  .patch(
    authController.protect,
    authController.restrictTo('admin', 'user'),
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    ItemController.deleteTour
  );

module.exports = router;
