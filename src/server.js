import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

require('dotenv').config()
import routes from './routes'


const server = express()

const port = 3333 || process.env.PORT

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.wimfi.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })

server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(port, () => console.log(`Running on port ${port}`))
