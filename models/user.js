import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({


    name: {
        type: String,
        required:[true, 'Please provide a name'],
        minLength:3,
        maxLength:20,
        trim:true,
    },

    email: {
        type: String,
        required:[true, 'Please provide a email'],
        validator:{
            validator:validator.isEmail,
            message:"Please provide a Valid Email",
        },
        unique:true,
    },
    password: {
        type: String,
        required:[true, 'Please provide a password'],
        minLength:8,
        maxLength:8,
        trim:true,
    }, 
    
    lastName: {
        type: String,
        trim:true,
        maxLength:20,
        default:'Last Name'

    },
    Location:{
        type: String,
        trim: true,
        maxLength:20,

    }
})


export default userSchema
