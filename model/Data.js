const mongoose = require('mongoose');
const singleValidator = require('mongoose-unique-validator');


const DataSchema = mongoose.Schema(
    {
        idData: {
            type: String,
            unique: true
        },

        file: {
            type: String,
        }
    }
)

DataSchema.plugin(singleValidator);

module.exports = mongoose.model('Data', DataSchema)