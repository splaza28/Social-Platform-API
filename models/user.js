const { Schema, model } = require('mongoose');
const User = model('User', UserSchema);

const UserSchema = new Schema ({
    username:{
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,

    }

})


module.exports = User;