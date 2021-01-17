const mongoose = require('mongoose');
const validator = require('validator');

const branchSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true , 'branch must have a Name']
    },

    district : {
        type: String,
        require: [true , 'branch must have a district'],
        enum: ['Southern',  'Northern', 'Central'],
    },
    Address :{
        type: String,
        require: [true , 'branch must have an Address']
    },
    active: {
        type :Boolean,
        default: true,
        select: false
    } ,
    itemList : [{
        type: mongoose.Schema.ObjectId,
        ref: 'Item'
    }],
    
});

const Branch = mongoose.model('Branch' , branchSchema);
module.exports = Branch; 