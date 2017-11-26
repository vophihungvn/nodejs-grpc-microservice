import path from 'path'
import grpc from 'grpc'

const { env } = process

var PROTO_PATH = path.join(__dirname, '..', '..', '..', 'proto', 'main.proto')

// host
const AuthenticateHost = env.AuthenticateHost || 'localhost:3001'
const TodoHost = env.TodoHost || 'localhost:3003'

const { AuthenticateService, TodoService } = grpc.load(PROTO_PATH).todo


export const
    authenticateService = new AuthenticateService(AuthenticateHost, grpc.credentials.createInsecure()),
    todoService = new TodoService(TodoHost, grpc.credentials.createInsecure())