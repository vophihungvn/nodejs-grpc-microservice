import express from 'express'
import bodyParser from 'body-parser'
import routers from './router'
import cors from 'cors'
import path from 'path'

const app = express()


app
  .use(cors({
    origin: ['http://localhost:3004'], //just for testing
    optionsSuccessStatus: 200
  }))
  .use(express.static(path.join(__dirname, 'client', 'build')))
  .use(bodyParser.json({
    limit: '50mb'
  }))
  .use(bodyParser.urlencoded({
    extended: false,
    limit: '50mb'
  }))
  .get('/', (req, res) => res.sendFile('index.html', {root: path.join(__dirname, 'client', 'build') }))
  .use(routers)


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`NodeJS server listen on ${PORT}`)
})