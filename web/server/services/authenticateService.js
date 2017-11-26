import { authenticateService } from './protoService'

export default class AuthenticateService {

    async login({ email }) {
        return new Promise((resolve, reject) => {
            authenticateService.login({
                email
            }, (err, res) => {
                if(err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            })
        })
    }
}