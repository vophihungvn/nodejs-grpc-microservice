import {
  Router
} from 'express'
import Base from '../base'
import {
  todoService
} from '../../services'

export default class TodoRoute extends Base {
  constructor() {
    super()
    this.router = new Router()
    this.router.get('/:user', this.route(this.getTodos))
    this.router.post('/', this.route(this.addTodo))
  }

  async getTodos(req, res) {
    const {
      user
    } = req.params
    const todos = await todoService.listTodo({
      user
    })
    this.onSuccessAsList(res, todos)
  }

  async addTodo(req, res) {
    const {
      user,
      description
    } = req.body
    const todos = await todoService.addTodo({
      user,
      description
    })
    this.onSuccess(res, todos)
  }
}