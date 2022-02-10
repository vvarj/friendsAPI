const mongoose = require('mongoose');

const FriendSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

module.exports=mongoose.model('Friends',FriendSchema);