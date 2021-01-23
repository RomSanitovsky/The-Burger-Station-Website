const APIFeatures = require('../utils/apiFeatures');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');
const Branch = require('../models/branchModel');




exports.getAllBranches = factory.getAll(Branch);
exports.getBranch = factory.getOne(Branch);
exports.createBranch = factory.createOne(Branch);
exports.updateBranch = factory.updateOne(Branch);
exports.deleteBranch = factory.deleteOne(Branch);