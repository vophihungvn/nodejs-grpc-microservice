import Base from '../Base'
import { Router } from 'express'
import { authenticateService } from '../../services'

export default class TodoRoute extends Base {
    constructor() {
        super()
        this.router = new Router()
        this.router.post('/login', this.route(this.login))
    }

    async login(req, res) {
        const { email } = req.body
        const user = await authenticateService.login({email})
        this.onSuccess(res, user)
    }
}