"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListUset_1 = require("../models/ListUset");
var User_1 = require("../models/User");
exports.listUser = new ListUset_1.ListUser();
exports.driverLocation = function (client, io) {
    client.on('skiper_silver', function (data) {
        console.log(data);
        io.emit('location', data);
    });
};
exports.connectUser = function (data, client, io) {
    var userId = data.userId, rooms = data.rooms, name = data.name, lastName = data.lastName, categoryId = data.categoryId, avatar = data.avatar;
    var user = new User_1.User(client.id, userId, rooms, name, lastName, categoryId, avatar);
    exports.listUser.addUser(user);
    io.emit('user-active', exports.listUser.getList());
};
exports.disconnectUser = function (client, io) {
    client.on('disconnect', function () {
        exports.listUser.deleteUser(client.id);
        io.emit('user-active', exports.listUser.getList());
    });
};
exports.getUsers = function (client, io) {
    client.on('', function () {
        // io.emit('user-active', listUser.getList());
        io.to(client.id).emit('user-active', exports.listUser.getList());
    });
};
