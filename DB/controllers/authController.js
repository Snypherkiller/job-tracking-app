import User from "../../models/user"


const register =async(req,res)=>
{
    try {

        const user = await User.create(req.body)
        res.status(201).json({user})
        
    } catch (error) {
        res.status(500).json({msg:"There is an Error"})
    }
}
const login =async(req,res)=>
{
    res.send('Login user')
}
const updateUser =async(req,res)=>
{
    res.send('Update user')
}

export {register,login,updateUser}