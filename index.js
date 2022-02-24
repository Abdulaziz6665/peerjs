const express = require('express')
const socket = require('socket.io')
const { v4: uuidV4 } = require('uuid')

const app = express()
const server = require('http').createServer(app)

const IO = socket(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
})



IO.on('connection', client => {
  client.emit('uuid-connect', {roomId: uuidV4()})
})




server.listen(3001, () => console.log(3001))