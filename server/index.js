const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const motorcycleCtrl = require('./motorcycleCtrl')

app.post('/motorcycle', motorcycleCtrl.addMotorcycle)

const port = 4545

app.listen(port, console.log(`Take us warp ${port}!`))