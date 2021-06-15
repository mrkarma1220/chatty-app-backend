const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        _id: {
            type: String
        },
        name: {
            type: String
        }, 
        email: {
            type: String
        },
        photoURL: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('User', userSchema);