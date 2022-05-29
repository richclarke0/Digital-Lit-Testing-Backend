const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ["multi","text"]
    },
    question: {type : String},
    multis: [{type : String}],
    img : {type: String},
});

module.exports = mongoose.model('Question', questionSchema);