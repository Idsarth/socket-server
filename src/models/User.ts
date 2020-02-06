export class User {
  public socketId: string
  public rooms: string
  public userId: number
  public avatar: string
  public name: string
  public lastName: string
  public categoryId: number

  constructor(socketId: string, userId: number, rooms: string, name: string, lastName: string, categoryId: number, avatar: string) {
    this.socketId = socketId
    this.userId = userId
    this.rooms = rooms
    this.name = name
    this.lastName = lastName
    this.categoryId = categoryId
    this.avatar = avatar
  }
}