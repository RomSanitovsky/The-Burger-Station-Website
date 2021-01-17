const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true , 'user must have a First Name']
    },
    LastName: {
        type: String,
        require: [true , 'user must have a Last Name']
    },

    email : {
        type: String,
        require: [true , 'user must have an email'],
        unique: [true],
        lowercase: [true],
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    role :{
        type: String,
        enum: ['user',  'admin'],
        default: 'user'
    
    },
    password: {
        type: String,
        required : [true , 'Please provide a password'],
        minlength: 8,
        select : false
    },
    passwordConfirm: {
        type: String,
        required : [true , 'Please confirm your password'],
        validate: {
            //this only works on creat OR save!!!
            validator: function(el){
                return el===this.password;  
            },
            message : 'Passwords are not the same'
        }
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpired: Date,
    active: {
        type :Boolean,
        default: true,
        select: false
    }
});
