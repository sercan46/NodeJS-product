var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productSchema = Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    price: Number,
    count: Number,
    description: String
    }, 
    { timestamps: true }
);
module.exports=mongoose.model('product',productSchema);