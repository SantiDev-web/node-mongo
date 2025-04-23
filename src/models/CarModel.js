const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    color: { type: String, required: true },
    combustible: {
        tipo: { type: String },
        litros: { type: Number },
    }
});


module.exports = mongoose.model('Car', carSchema);