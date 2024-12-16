import express from 'express'
import dotenv from'dotenv'





import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRoutes.js'


import connectDB from './DB/connect.js'

dotenv.config()




//middleware
import notFoundMiddleware from './middlewares/not-found.js'
import errorHandlerMiddleware from './middlewares/error-handler.js'


const app=express()



app.get('/', (req,res)  => {


    res.send('Welcome')
})


app.use(express.json())

app.use('/api/v1/auth' , authRouter)
app.use('/api/v1/jobs',jobsRouter)


app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000



const start = async ()=>{

    try {
        await connectDB (process.env.MONGO_URL)
        app.listen(port, ()=>{

            console.log (`The app is running on port ${port}`)
        })



        console.log("Connected to Database successfully")


        
    } catch (error) {
        console.log(error)
        
    }



}

start()