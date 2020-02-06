import express from 'express'
import socketIO from 'socket.io'
import http from 'http'

import * as socket from './socket/socket.service'

type UserType = {
  userId: number
  rooms: string
  name: string
  lastName: string
  categoryId: number,
  avatar: string
}

export class Server {
  private static _instance: Server

  public app: express.Application
  public port: number
  public io: socketIO.Server
  private httpServer: http.Server

  private constructor() {
    this.app = express()
    this.port = 3000

    this.httpServer = new http.Server(this.app)
    this.io = socketIO(this.httpServer)

    this.listenSocket()
  }

  public static get instance() {
    return this._instance || ( this._instance = new this() )
  }

  private listenSocket() {
    console.log('listening')

    this.io.on('connection', client => {
      const data: UserType = client.handshake.query
      // Connected user
      socket.connectUser(data, client, this.io)

      // Disconnected user
      socket.disconnectUser(client, this.io)

      // Location
      socket.driverLocation(client, this.io)
    })
  }

  public start (callback: Function): void {
    this.httpServer.listen(this.port, callback())
  }
}