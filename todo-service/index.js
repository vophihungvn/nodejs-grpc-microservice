const grpc = require('grpc')
const SERVER_PORT = process.env.PORT || 3003
const Todo = require('./model')
const proto = grpc.load('../proto/main.proto')
const server = new grpc.Server()

const addTodo = (call, callback) => {
  const {
    user,
    description
  } = call.request
  try {
    const todo = new Todo({
      user,
      description,
      dateCreated: new Date().getTime(),
      dateUpdated: new Date().getTime()
    })
  
    todo
      .save((todoItem) => {
        const obj = JSON.parse(JSON.stringify(todo.toObject()))
        console.log(obj)
        callback(null, obj)
      })
      .catch(callback)  
  } catch (error) {
    callback(error)
  }
  
}

const listTodo = (call, callback) => {
  const {
    user
  } = call.request

  Todo
    .find({
      user
    })
    .then(todos => {
      callback(null, todos)
    })
    .catch(callback)
}

server.addService(proto.todo.TodoService.service, {
  addTodo,
  listTodo
})

server.bind(`0.0.0.0:${SERVER_PORT}`, grpc.ServerCredentials.createInsecure())
server.start()
console.log(`Todo Service start at localhost:${SERVER_PORT}`)