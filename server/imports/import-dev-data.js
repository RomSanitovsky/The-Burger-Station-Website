const fs = require('fs');
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
    useFindAndModify: false
  })
  .then(() => console.log('DB connection successful!'));

// READ JSON FILE
const items = JSON.parse(fs.readFileSync(`${__dirname}/items.json`, 'utf-8'));
const branches = JSON.parse(fs.readFileSync(`${__dirname}/branches.json`, 'utf-8'));

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Item.create(items);
    // await User.create(users, { validateBeforeSave: false });
    await Branch.create(branches);
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
