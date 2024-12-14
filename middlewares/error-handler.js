const errorHandlerMiddleware = (err,req,res,next)=>
{
    console.log(err)
    res.status(500).json({msg:'There is an Error'})
}

export default errorHandlerMiddleware