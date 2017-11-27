import express from 'express'
import bodyParser from 'body-parser'
import routers from './router'

const app = express()


app
    .use(bodyParser.json({
        limit: '50mb'
    }))
    .use(bodyParser.urlencoded({
        extended: false,
        limit: '50mb'
    }))
    .use(routers)


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`NodeJS server listen on ${PORT}`)
})