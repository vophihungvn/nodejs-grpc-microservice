const mongoose = require('mongoose')
const MONGO_HOST = process.env.MONGO_HOST || 'localhost'
mongoose.connect(`mongodb://${MONGO_HOST}/todo`, {
    useMongoClient: true
})

const { Schema } = mongoose
mongoose.Promise = Promise

module.exports = mongoose.model('todo', {
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    description: String,
    status: {
        type: String,
        enum: ['TODO', 'DOING', 'DONE'],
        default: 'TODO'
    },
    dateCreated: Number,
    dateUpdated: Number
})