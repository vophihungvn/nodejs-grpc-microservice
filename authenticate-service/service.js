const path = require('path')
const grpc = require('grpc')

const { env } = process

var PROTO_PATH = path.join(__dirname, '..', 'proto', 'main.proto')

// host
const EmailHost = env.EmailHost || 'localhost:3002'

const { EmailService } = grpc.load(PROTO_PATH).todo


module.exports = {
    emailService: new EmailService(EmailHost, grpc.credentials.createInsecure())
} 