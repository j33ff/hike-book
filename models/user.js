const mongoose = require("mongoose");



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
        type: [{type: mongoose.Schema.Types.ObjectId, ref:'Hike'}]   
    },
    googleId: {
        type: String,
    },

});


module.exports = mongoose.model("User", userSchema);