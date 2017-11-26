import Base from './base'

export default class ParseBodyMiddleware extends Base {
    use() {
        return (req, res, next) => {
            req.rawBody = ''
            req.setEncoding('utf8')
          
            req.on('data', function(chunk) { 
              req.rawBody += chunk
            });
          
            req.on('end', function() {
              next();
            })
        }
    } 
}