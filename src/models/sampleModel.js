// Este archivo define el modelo de datos para los recursos de la API utilizando un esquema que puede ser utilizado con una base de datos.

const mongoose = require('mongoose');

const sampleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const SampleModel = mongoose.model('Sample', sampleSchema);

module.exports = SampleModel;