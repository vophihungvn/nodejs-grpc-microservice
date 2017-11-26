import {
  todoService
} from './protoService'

export default class TodoService {

  async addTodo({
    user,
    description
  }) {
    return new Promise((resolve, reject) => {
      todoService.addTodo({
        user,
        description
      }, (err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }

  async listTodo({
    user
  }) {
    return new Promise((resolve, reject) => {
      todoService.listTodo({
        user
      }, (err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }
}