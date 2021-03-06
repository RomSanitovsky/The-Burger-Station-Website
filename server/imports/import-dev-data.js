/* eslint-disable no-await-in-loop */
const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Item = require('../models/itemModel');
const Branch = require('../models/branchModel');
const User = require('../models/userModel');

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
  .then(() => console.log('DB connection successful!'));

// READ JSON FILE
const items = JSON.parse(fs.readFileSync(`${__dirname}/items.json`, 'utf-8'));
const branches = JSON.parse(
  fs.readFileSync(`${__dirname}/branches.json`, 'utf-8')
);
const users = JSON.parse(
  fs.readFileSync(`${__dirname}/Userdata.json`, 'utf-8')
);

// const modifyUsers = async (usersList) => {
//   let res1;
//   let res2;
//   usersList.forEach(async (element, index) => {
//     res1 = await Item.aggregate([
//       { $sample: { size: 1 } },
//       { $project: { _id: 1 } },
//     ]);
//     element.favItem = res1[0]._id.toString();
//     res2 = await Branch.aggregate([
//       { $sample: { size: 1 } },
//       { $project: { _id: 1 } },
//     ]);
//     element.favBranch = res2[0]._id.toString();

//     usersList[index] = { ...element };
//     console.log(usersList[index]);
//   });
// };

const changeUser = async (user) => {
  let res1;
  let res2;
  res1 = await Item.aggregate([
    { $sample: { size: 1 } },
    { $project: { _id: 1 } },
  ]);
  res1 = res1[0]._id.toString();
  res2 = await Branch.aggregate([
    { $sample: { size: 1 } },
    { $project: { _id: 1 } },
  ]);
  res2 = res2[0]._id.toString();
  return { ...user, favItem: res1, favBranch: res2 };
};
// IMPORT DATA INTO DB
const importData = async () => {
  let res1;
  let res2;

  try {
    await Item.create(items);
    // await User.create(users, { validateBeforeSave: false });
    await Branch.create(branches);

    // await modifyUsers(users);
    for (let i = 0; i < users.length; i += 1) {
      // eslint-disable-next-line prefer-const
      let result = await changeUser(users[i]);
      users[i] = { ...result };
    }

    for (let i = 0; i < users.length; i += 1) {
      console.log('__________________________');
      console.log(users[i]);
    }

    await User.create(users);

    console.log('Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Item.deleteMany();
    await Branch.deleteMany();
    await User.deleteMany();
    console.log('Data successfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
