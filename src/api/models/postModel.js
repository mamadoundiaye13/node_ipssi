const mongoose = require('mongoose');
const {Schema} = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        unique: true,
        require: 'Le titre est requis'
    },

    content: {
        type: String,
        require: true,
    },

    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', postSchema);