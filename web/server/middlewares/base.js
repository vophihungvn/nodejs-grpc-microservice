
export default class BaseMiddleware {
    run(params) {
        return this.use(...arguments)
    }
}