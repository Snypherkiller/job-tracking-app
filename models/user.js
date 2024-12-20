import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

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
        validate:{
            validator:validator.isEmail,
            message:"Please provide a Valid Email"
        },
        unique:true,
    },
    password: {
        type: String,
        required:[true, 'Please provide a password'],
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
        default:"Default",

    }
})

userSchema.pre('save',async function(){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password , salt)

})

userSchema.method.createJWT = function(){
return jwt.sign({userId:this._id}),'jwtSecret',{expiresIn:'1d'}}


const User = mongoose.model("user",userSchema);

export default User