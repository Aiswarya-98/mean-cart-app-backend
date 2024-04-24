require('dotenv').config()
const express = require('express')
const cors = require ('cors')
require('./connection/db')
const router = require ('./router/router')

const DailyCartServer = express()
DailyCartServer.use(cors())

DailyCartServer.use(express.json())
DailyCartServer.use(router)

const PORT = 3000 || process.env.PORT

DailyCartServer.listen(PORT,()=>{
  console.log(`DailyCartServer started at PORT : ${PORT}`);

})

DailyCartServer.get('/',(req,res)=>{
  res.send('<h1>Daily Cart Server started.... waiting for client request........</h1>')
})