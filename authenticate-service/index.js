const grpc = require('grpc')
const SERVER_PORT = process.env.PORT || 3001
const User = require('./model')
const proto = grpc.load('../proto/main.proto')
const server = new grpc.Server()

const {
  emailService
} = require('./service')

// TODO: Refactor code
server.addService(proto.todo.AuthenticateService.service, {
  login(call, callback) {
    const {
      email
    } = call.request
    User.findOne({ email})
    .then(user => {
      if (user) {
        callback(null, {
          _id: user._id.toString(),
          email: user.email
        })
      } else {
        user = new User({
          email
        })
        user.save()
        .then(user => {
          emailService.sendEmail({
            email
          }, (err) => {
            if (err) {
              callback(err)
            } else {
              callback(null, {
                _id: user._id.toString(),
                email: user.email
              })
            }
          })
        })
        .catch(callback)
      }
    })
    .catch(callback)
  }
})

server.bind(`0.0.0.0:${SERVER_PORT}`, grpc.ServerCredentials.createInsecure())
server.start()
console.log(`Authenticate Service start at localhost:${SERVER_PORT}`)