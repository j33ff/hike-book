const mongoose = require("mongoose");

const hikeSchema = new mongoose.Schema(
    {
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        enum: ['easy','moderate','difficult'],
        required: true,
    },

});


module.exports = mongoose.model("Hike", hikeSchema);