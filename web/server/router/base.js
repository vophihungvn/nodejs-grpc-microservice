
export default class BaseRouter {

    onError(res, error, code = 500) {
        const message = (error instanceof Error) ? error.message : 'Something went wrong'
        
        res.status(code).json({ message })
    }

    onSuccess(res, object = {}, extras = {}) {
        if (object.toJSON) {
            object = object.toJSON()
        }
        object = object || {}
        if (Object.keys(object).length === 0) {
            res.json({
                code: 200
            })
        } else {
            res.json({
                code: 200,
                results: Object.assign({
                    object
                }, extras)
            })
        }
    }

    onSuccessAsList(res, objects = [], extras = {}, currentPage = {
        page: 1
    }) {
        if (objects.toJSON) {
            objects = objects.toJSON()
        }
        res.json({
            code: 200,
            results: Object.assign({
                objects
            }, extras),
            pagination: {
                'current_page': currentPage.page,
                'next_page': currentPage.page + 1,
                'prev_page': currentPage.page - 1,
                'limit': currentPage.limit
            }
        })
    }

    route(func) {
        return (req, res) => func
            .bind(this)(req, res)
            .catch(err => this.onError(res, err))
    }
}