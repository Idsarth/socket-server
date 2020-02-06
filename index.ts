import { json } from 'express'
import { Server } from './src/server'
import cors from 'cors'
import router from './src/routes/routes'

const server = Server.instance

server.app.use(json())
server.app.use( cors({ origin: true, credentials: true  }) );

server.app.use('/', router)

server.start(() => {
  console.log(`server is listening on port ${server.port}`)
})