const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
require('colors')

const repoRouter = require('./models/repoRouter')

const server = express()

server.use(helmet())
server.use(morgan('dev'))
server.use(cors())
server.use(express.json())

server.use('/api/repo', repoRouter)

module.exports = server