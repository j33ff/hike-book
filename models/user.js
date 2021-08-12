const mongoose = require("mongoose");

const favouriteSchema = new mongoose.Schema({
    text: String,
    hikeID: mongoose.Schema.Types.ObjectId, 

}, {
    timestamps: true
});

const userSchema = new mongoose.Schema(
    {
    username: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required: true
    },
    favourites: {
        type: [{type: mongoose.Schema.Types.ObjectId, ref:'hike'}]   
    },
    googleId: {
        type: String,
    },

});


module.exports = mongoose.model("User", userSchema);