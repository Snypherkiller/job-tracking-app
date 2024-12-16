import User from "../../models/user.js"
import mongoose from "mongoose"


const register =async(req,res,next)=>
{
    try {

        const user = await User.create(req.body)
        res.status(201).json({user})
        
    } catch (error) {
        console.log(error)
        next(error)
        
    }
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