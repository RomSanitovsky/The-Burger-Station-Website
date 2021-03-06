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
    const res = await Item.aggregate([
      { $sample: { size: 1 } },
      { $project: { _id: 1 } },
    ]);
    console.log(res[0]._id);

    const res2 = await Branch.aggregate([
      { $sample: { size: 1 } },
      { $project: { _id: 1 } },
    ]);
    console.log(res2[0]._id);
    console.log(res2[0]._id.toString());
    console.log(mongoose.Types.ObjectId(res2[0]._id.toString()));
  });
