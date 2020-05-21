import config from './config'
import express from 'express'
import Logger from './loaders/logger'

async function startServer() {
  const app = express()


  app.listen(config.port, err => {
    if (err) {
      Logger.error(err)
      process.exit(1)
      return
    }
    Logger.info(`Server listening on port: ${config.port}`)
  })
}

startServer()