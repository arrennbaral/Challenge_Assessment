const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')




const app = express()
app.use(express.json())
app.use(cors())



app.use('/get', require('./routers/routes'))



if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}



const PORT = process.env.PORT || 4000
app.listen(PORT, ()=>{
    console.log('Server is running on port', PORT)
})




