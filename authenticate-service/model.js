const mongoose = require('mongoose')
const MONGO_HOST = process.env.MONGO_HOST || 'localhost'
mongoose.connect(`mongodb://${MONGO_HOST}/todo`, {
    useMongoClient: true
})

mongoose.Promise = Promise

module.exports = mongoose.model('user', {
    email: String
})