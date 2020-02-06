import { User } from './User'

export class ListUser {
  private list: User[] = []

  public addUser(user: User): User {
    this.list.push(user)
    return user
  }

  public getList(): User[] {
    return this.list
  }

  public getUser(socketId?: string, userId?: number) {
    if (socketId) {
      return this.list.find(user => user.socketId === socketId)
    }
    if (userId) {
      return this.list.find(user => user.userId === userId)
    }
  }

  public getUsersInRooms(room: string): User[] {
    return this.list.filter(user => user.rooms === room)
  }

  public deleteUser(socketId: string): User[] {
    this.list = this.list.filter(user => user.socketId !== socketId)
    return this.list
  }
}