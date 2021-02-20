const mongoose = require('mongoose');
const slugify = require('slugify');
const Item = require('./itemModel');


const reviewSchema = new mongoose.Schema({
    review: {
        type: String,
        required: [true,'A review must have text'],
        trim : true,
        maxlength: [400, 'a review must have max 400 char length'],
        minlength: [3, 'a review name must have min 3 char length'],
    },
    rating: {
        type: Number,
        max: 5,
        min : 1
    },
    createdAt: {
        type : Date,
        default: Date.now(),
    },
    user : {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required : [true, 'review must belong to a user']
    },
    item :{
        type: mongoose.Schema.ObjectId,
        ref: 'Item',
        required : [true, 'review must belong to an item']
    }

},
 {
    toJSON: {virtuals:true},
    toObject: {virtuals:true}
});


const Review = mongoose.model('Review' , reviewSchema);
module.exports = Review; 