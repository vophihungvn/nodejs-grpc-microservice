const mongoose = require('mongoose')
const MONGO_HOST = process.env.MONGO_HOST || 'mongodb://localhost/todo'
mongoose.connect(MONGO_HOST, {
    useMongoClient: true
})

mongoose.Promise = Promise

module.exports = mongoose.model('user', {
    email: String
})