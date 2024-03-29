"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const socket_io_2 = require("socket.io");
const common_1 = require("@nestjs/common");
let EventsGateway = class EventsGateway {
    constructor() {
        this.logger = new common_1.Logger('AppGateway');
        this.httpServer = (0, http_1.createServer)();
        this.io = new socket_io_2.Server(this.httpServer);
    }
    connect() {
        this.logger.log("connected serverside");
    }
    test1(client, data) {
        console.log(data);
        console.log(client.id);
        this.logger.log("connected");
        this.io.to(client.id).emit('newClient');
    }
    handleConnection(client) {
        this.logger.log(`new client connected ${client.id}`);
    }
    handleDisconnect(client) {
        this.logger.log(`client ${client.id} disconnected`);
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", Object)
], EventsGateway.prototype, "httpServer", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('CONNECT'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EventsGateway.prototype, "connect", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('TEST1'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], EventsGateway.prototype, "test1", null);
EventsGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: {
            origin: '*',
        },
    })
], EventsGateway);
exports.EventsGateway = EventsGateway;
//# sourceMappingURL=events.gateway.js.map