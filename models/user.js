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
        match: [/.+\@.+\..+/]

    },

    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],

    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought' 
        }
    ]
},

{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
}
);
UserSchema.virtual('friendCount').get(function () {
	return this.friends.length;
});  




module.exports = User;