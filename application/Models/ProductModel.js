const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    details: {
        description: String,
        especification: String,
    },
    Modelo: String,
    Tamanho: String,
    Base: String,
    Tufos: String,
    Cores: String,
    Categoria: String,
    files: ['']

}, {
    timestamps: true
})

module.exports = mongoose.model('Product', ProductSchema)