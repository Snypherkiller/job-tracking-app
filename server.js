import express from 'express'
import notFoundMiddleware from './middlewares/not-found.js'
const app=express()



app.get('/', (req,res)  => {
    res.send('Welcome')
})

app.use(notFoundMiddleware)

const port = process.env.PORT || 5000

app.listen(port, ()=>{

    console.log (`The app is running on port ${port}`)
})