const mongoose = require('mongoose')

const FileSchema = new mongoose.Schema({
    url: String
})

module.exports = mongoose.model('File', FileSchema)