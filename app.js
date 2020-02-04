require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors())
app.use(express.static('build'))
app.use(bodyParser.json())

const clickSchema = mongoose.Schema({
    n: Number
})

const Click  = mongoose.model('Click', clickSchema)

app.get('/', (req, res) => {
    res.sendFile('/index.html');
});

app.put('/clicked', async (req, res) => {
    const clickId = '5e37de8a162dc4e5fc2326ab'
    const click = await Click.findById(clickId)
    const newClicks = click.n + 1
    let prize = 0

    const mod500 = newClicks % 500
    const mod100 = newClicks % 100
    const mod10 = newClicks % 10

    const toNextPrize = Math.min(500 - mod500, 100 - mod100, 10 - mod10)
    if (mod500 === 0) prize = 250
    else if (mod100 === 0) prize = 100
    else if (mod10 === 0) prize = 5

    const u = await Click.findByIdAndUpdate(clickId, {n : newClicks})
    await u.save()
    res.status(201).json({p : prize, t : toNextPrize})
});
const mongourl = process.env.MONGODB_URI
console.log(mongourl)
mongoose.connect(mongourl, { useNewUrlParser: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

module.exports = app