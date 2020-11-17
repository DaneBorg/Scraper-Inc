const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userName: {
        type: String,
        required: true
    },
    // password: {
    //     required: true
    // },
    email: {
        type: String,
        required: true,
        index: {
          unique: true,
          sparse: true
        }
    }
})

module.exports = mongoose.model('User', userSchema)