const { Schema, model } = require('mongoose')

const cafeSchema = new Schema({
    nombre: String,
    sabor: String,
    descripcion: String,
    precio: String,
    peso: String
})

module.exports = model('Cafe', cafeSchema)

// table cafe
// id ++
// nombre = varchar(100)
// desription = varchar(200)
// constraint primary key(id)