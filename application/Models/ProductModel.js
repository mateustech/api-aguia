const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    Modelo: String,
    Tamanho: String,
    Base: String,
    Tufos: String,
    Cores: String,
    Categoria: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Product', ProductSchema)