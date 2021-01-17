const mongoose = require('mongoose');
const validator = require('validator');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true , 'branch must have a Name']
    },

    price : {
        type: Number,
        require: [true , 'item must have a price'],
    },
    active: {
        type :Boolean,
        default: true,
        select: false
    } ,
    branchList : [{
        type: mongoose.Schema.ObjectId,
        ref: 'Branch'
    }],
    reviewList : [{
        type: mongoose.Schema.ObjectId,
        ref: 'Review'
    }]
},
{
    toJSON: {virtuals:true},
    toObject: {virtuals:true}
});

const Item = mongoose.model('Item' , itemSchema);
module.exports = Item; 
