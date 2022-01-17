const mongoose = require('mongoose');


const DataSchema = mongoose.Schema(
    {
        id: {
            type: Number
        },

        file: {
            type: String,
        }
    }
)


module.exports = mongoose.model('Data', DataSchema)