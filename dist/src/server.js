"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var socket_io_1 = __importDefault(require("socket.io"));
var http_1 = __importDefault(require("http"));
var socket = __importStar(require("./socket/socket.service"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.port = 3000;
        this.httpServer = new http_1.default.Server(this.app);
        this.io = socket_io_1.default(this.httpServer);
        this.listenSocket();
    }
    Object.defineProperty(Server, "instance", {
        get: function () {
            return this._instance || (this._instance = new this());
        },
        enumerable: true,
        configurable: true
    });
    Server.prototype.listenSocket = function () {
        var _this = this;
        console.log('listening');
        this.io.on('connection', function (client) {
            var data = client.handshake.query;
            // Connected user
            socket.connectUser(data, client, _this.io);
            // Disconnected user
            socket.disconnectUser(client, _this.io);
            // Location
            socket.driverLocation(client, _this.io);
        });
    };
    Server.prototype.start = function (callback) {
        this.httpServer.listen(this.port, callback());
    };
    return Server;
}());
exports.Server = Server;
