const mongoose = require('mongoose');
const {Schema} = mongoose;


var commentSchema = new Schema(
    {
        name: {
            type: String,
            require: "le nom est requis"
        },
        message: {
            type: String,
            require: "le message est requis"
        },
        post_id: {
            type: String,
        },
        created_at: {
            type: Date,
            default: Date.now
        },
    }
);

module.exports = mongoose.model('Comment', commentSchema);