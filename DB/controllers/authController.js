import User from "../../models/user.js"
import mongoose from "mongoose"
import jwt from 'jsonwebtoken'

const register =async(req,res,next)=>
{
    const user = await User.create(req.body)
    const token=user.createJWT()
    user.createJWT()
    res.status(201).json({user,token})
}
const login =async(req,res)=>
{
    try {
        
    } catch (error) {
        
    }
}
const updateUser =async(req,res)=>
{
    res.send('Update user')
}

export {register,login,updateUser}