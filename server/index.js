import express, { urlencoded } from 'express'
import mongoose from 'mongoose';
import todoRouter from './routes/todo.js'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('MongoDB connected.')
)

const app = express()

const port = process.env.PORT;

app.use(cors())
app.use(express.json())
app.use('/todo', todoRouter)

app.get('/', (req, res) => {
    res.send("Hello from Server.")
})

app.listen(port , () => console.log(`Server running at port ${port}`)
)