const express = require('express')
const path = require('path')

// const postsRoutes = require('./routes/posts')
const fruitsRoutes = require('./routes/fruits')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

// server.use('/api/v1/posts', postsRoutes)
server.use('/api/v1/fruits', fruitsRoutes)

module.exports = server
