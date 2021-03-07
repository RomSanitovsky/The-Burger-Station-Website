const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Item = require('../models/itemModel');
const Branch = require('../models/branchModel');

dotenv.config({ path: '../config.env' });
const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(async () => {
    const res = await Branch.aggregate([{ $project: { _id: 1 } }]);
    console.log(res);
  });
