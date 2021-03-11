const mongoose = require('mongoose');
const validator = require('validator');

const branchSchema = new mongoose.Schema(
  {
    city: {
      type: String,
      required: [true, 'branch must have a city'],
    },

    district: {
      type: String,
      required: [true, 'branch must have a district'],
      enum: ['Southern', 'Northern', 'Central'],
    },
    address: {
      type: String,
      required: [true, 'branch must have an Address'],
    },
    itemList: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Item',
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Branch = mongoose.model('Branch', branchSchema);
module.exports = Branch;
