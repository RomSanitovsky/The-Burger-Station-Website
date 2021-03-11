const APIFeatures = require('../utils/apiFeatures');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');
const Item = require('../models/itemModel');




exports.getAllItems = factory.getAll(Item);
exports.getItem = factory.getOne(Item);
exports.createItem = factory.createOne(Item);
exports.updateItem = factory.updateOne(Item);
exports.deleteItem = factory.deleteOne(Item);

exports.getItemTypeCountes = catchAsync(async (req, res, next) => {
    const results = await Item.aggregate([
      {
        $unwind: '$type',
      },
      {
        $group: {
          _id: '$type',
          total: { $sum: 1 },
        },
      },
    ]);
  
    res.status(200).json({
      status: 'success',
      data: {
        results,
      },
    });
  });

exports.checkUser = catchAsync(async (req,res,next)=> {
    if (req.user.id === req.body.user)
    {
        return next();
    }
    return next(new AppError('you are not allowed to change this item',403));
});