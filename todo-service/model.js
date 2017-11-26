const mongoose = require('mongoose')
const { Schema } = mongoose
const MONGO_HOST = process.env.MONGO_HOST || 'mongodb://localhost/todo'
mongoose.connect(MONGO_HOST, {
    useMongoClient: true
})

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