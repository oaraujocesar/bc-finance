import express from 'express'
import cors from 'cors'

require('dotenv').config()
import routes from './routes'


const server = express()

const port = 3333 || process.env.PORT

server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(port, () => console.log(`Running on port ${port}`))
