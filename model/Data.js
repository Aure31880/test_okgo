const mongoose = require('mongoose');


const DataSchema = mongoose.Schema(
    {
        file: {
            type: String,
        }
    }
)


module.exports = mongoose.model('Data', DataSchema)