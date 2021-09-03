const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')




const app = express()
app.use(express.json())
app.use(cors())



app.use('/get', require('./routers/routes'))






app.listen(4000,()=>console.log("Server running on port 4000"))




