import express from 'express'
import dotenv from'dotenv'
import connectDB from './DB/connect.js'

dotenv.config()






import notFoundMiddleware from './middlewares/not-found.js'
import errorHandlerMiddleware from './middlewares/error-handler.js'
const app=express()



app.get('/', (req,res)  => {


    res.send('Welcome')
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000



const start = async ()=>{

    try {
        await connectDB (process.env.MONGO_URL)
        console.log("Connected to Database successfully")

        app.listen(port, ()=>{

            console.log (`The app is running on port ${port}`)
        })

        
    } catch (error) {
        console.log(error)
        
    }

}

start()