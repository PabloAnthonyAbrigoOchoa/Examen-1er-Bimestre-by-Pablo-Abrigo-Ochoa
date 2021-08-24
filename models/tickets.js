const { Schema, model } = require('mongoose');

const TickSchema = new Schema ({
    fecha_inicio:{type: String, required: true},
    fecha_fin:{type: String, required: true},
    descripcion_inconveniente:{type: String, required: true},
    estado:{type: String, required: true}
})

module.exports = model('Tick','TickSchema');