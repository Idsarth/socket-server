"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListUser = /** @class */ (function () {
    function ListUser() {
        this.list = [];
    }
    ListUser.prototype.addUser = function (user) {
        this.list.push(user);
        return user;
    };
    ListUser.prototype.getList = function () {
        return this.list;
    };
    ListUser.prototype.getUser = function (socketId, userId) {
        if (socketId) {
            return this.list.find(function (user) { return user.socketId === socketId; });
        }
        if (userId) {
            return this.list.find(function (user) { return user.userId === userId; });
        }
    };
    ListUser.prototype.getUsersInRooms = function (room) {
        return this.list.filter(function (user) { return user.rooms === room; });
    };
    ListUser.prototype.deleteUser = function (socketId) {
        this.list = this.list.filter(function (user) { return user.socketId !== socketId; });
        return this.list;
    };
    return ListUser;
}());
exports.ListUser = ListUser;
