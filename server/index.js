const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()

app.use(express.json())
app.use(cors())

const motorcycleCtrl = require('./motorcycleCtrl')

app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname, '../client/index.html'));
  });

app.post('/motorcycle', motorcycleCtrl.addMotorcycle)

const port = process.env.PORT || 4545

app.listen(port, console.log(`Take us warp ${port}!`))