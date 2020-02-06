import socketIO, { Socket } from 'socket.io'
import { ListUser } from '../models/ListUset'
import { User } from '../models/User'

export const listUser = new ListUser()

type UserType = {
  rooms: string
  userId: number
  name: string
  lastName: string
  avatar: string
  categoryId: number
}

export const driverLocation = (client: Socket, io: SocketIO.Server) => {
  client.on('skiper_silver', (data) => {
    console.log(data)
    io.emit('location', data)
  })
}

export const connectUser = (data: UserType, client: Socket, io: SocketIO.Server) => {
  const { userId, rooms, name, lastName, categoryId, avatar } = data
  const user = new User(client.id, userId, rooms, name, lastName, categoryId, avatar)
  listUser.addUser(user)

  io.emit('user-active', listUser.getList())
}

export const disconnectUser = (client: Socket, io: SocketIO.Server) => {
  client.on('disconnect', () => {

    listUser.deleteUser(client.id)
    io.emit('user-active', listUser.getList())
  })
}

export const getUsers = (client: Socket, io: SocketIO.Server) => {
  client.on('', () => {
    // io.emit('user-active', listUser.getList());
    io.to(client.id).emit('user-active', listUser.getList())
  })
}