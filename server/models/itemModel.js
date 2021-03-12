const mongoose = require('mongoose');
const validator = require('validator');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true , 'item must have a Name']
    },

    price : {
        type: Number,
        required: [true , 'item must have a price'],
    },
    type: {
        type: String,
        enum: ['food', 'drink']
    }
},
{
    toJSON: {virtuals:true},
    toObject: {virtuals:true}
});

const Item = mongoose.model('Item' , itemSchema);
module.exports = Item; 
