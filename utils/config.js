require('dotenv').config()
const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT

const mongoose = require('mongoose')
const mongoUrl = MONGODB_URI
mongoose.connect(mongoUrl)

module.exports = {
    MONGODB_URI,
    PORT
}