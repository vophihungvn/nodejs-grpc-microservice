import fs from 'fs'
import path from 'path'
import express from 'express'

let routerDirs = fs.readdirSync(__dirname)
let route = express.Router()
routerDirs.forEach( dir => {
  let routeDir = path.join(__dirname, dir);
  if (fs.lstatSync(routeDir).isDirectory()) {
    let modules = fs.readdirSync(routeDir)
    let subRoute = express.Router();
    modules.forEach(module => {
      const t = require(path.join(__dirname, dir, module))
      const { default: Router } = require(path.join(__dirname, dir, module))
      const { router } = new Router()
      module = module.split('.')[0]
      subRoute.use(`/${module}`, router)
    })
    route.use('/' + dir, subRoute)
  }
})

export default route