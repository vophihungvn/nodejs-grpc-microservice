import mongoose from 'mongoose'
const DB_HOST = process.env.DB_HOST || 'mongodb://localhost/todo'
mongoose.connect(DB_HOST, {
  useMongoClient: true
})
mongoose.Promise = Promise
export default mongoose