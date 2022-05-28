const mongoose = require('mongoose');


const questionSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ["multi","text","img",]
    },
    questionText: {type : String},
    multiChoices: {
        type: Array,
    },
    img : {type: String},
});

module.exports = mongoose.model('Question', questionSchema);