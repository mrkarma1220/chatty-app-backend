const mongoose = require('mongoose')

// creating schema for messageTable
const MessageSchema = new mongoose.Schema(
    {
        conversationId: {
            type: String
        },
        sender: {
            type: String
        },
        text: {
            type: String
        }
    },
    { timestamps: true}
);

module.exports = mongoose.model('Message', MessageSchema);