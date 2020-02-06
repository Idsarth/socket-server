"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(socketId, userId, rooms, name, lastName, categoryId, avatar) {
        this.socketId = socketId;
        this.userId = userId;
        this.rooms = rooms;
        this.name = name;
        this.lastName = lastName;
        this.categoryId = categoryId;
        this.avatar = avatar;
    }
    return User;
}());
exports.User = User;
