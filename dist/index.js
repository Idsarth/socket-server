"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var server_1 = require("./src/server");
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("./src/routes/routes"));
var server = server_1.Server.instance;
server.app.use(express_1.json());
server.app.use(cors_1.default({ origin: true, credentials: true }));
server.app.use('/', routes_1.default);
server.start(function () {
    console.log("server is listening on port " + server.port);
});
