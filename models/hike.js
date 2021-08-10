const mongoose = require("mongoose");

const hikeSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    date: {
        type: Date,
    },
    location: {
        type: String,
    },
    difficulty: {
        type: String,
        enum: ['easy','moderate','difficult'],
        required: true,
    },
   
});


module.exports = mongoose.model("Hike", hikeSchema);