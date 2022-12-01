import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import notePath from './routes/notePath.js'
import cors from 'cors'

dotenv.config()

const app = express()

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}))


app.use(express.json())

const connect = async() =>
{
    try {
        await mongoose.connect(process.env.MONGO)
        console.log('Mongo Connected')
    } catch (error) {
        console.log(error)
    }
}

app.use('/api/note',notePath)


app.listen(5000,() =>
{
    connect()
    console.log('Server work !')
})