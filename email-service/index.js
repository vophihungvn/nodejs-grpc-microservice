const grpc = require('grpc')
const SERVER_PORT = process.env.PORT || 3002
const proto = grpc.load('../proto/main.proto')
const server = new grpc.Server()

server.addService(proto.todo.EmailService.service, {
  sendEmail(call, callback) {
    const {
      email
    } = call.request

    console.log('call to email service with email', email)
    callback(null, {})
  }
})

server.bind(`0.0.0.0:${SERVER_PORT}`, grpc.ServerCredentials.createInsecure())
server.start()
console.log(`Email Service start at localhost:${SERVER_PORT}`)