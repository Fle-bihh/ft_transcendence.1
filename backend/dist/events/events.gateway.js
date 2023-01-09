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
const messages = Array();
const users = Array();
let EventsGateway = class EventsGateway {
    constructor() {
        this.logger = new common_1.Logger('AppGateway');
        this.httpServer = (0, http_1.createServer)();
        this.io = new socket_io_2.Server(this.httpServer);
    }
    connect() {
        this.logger.log('connected serverside');
    }
    add_message(client, data) {
        messages.push({
            id: messages.length,
            sender: data.sender,
            receiver: data.receiver,
            text: data.text,
        });
        this.logger.log('ADD_MESSAGE recu back');
        this.get_all_conv_info(client, { sender: data.sender });
        this.get_all_conv_info(users.find((user) => user.login === data.receiver).socket, { sender: data.sender });
    }
    get_conv(client, data) {
        this.logger.log('GET_CONV recu back');
        client.emit('get_conv', messages
            .sort((a, b) => a.id - b.id)
            .filter((message) => (message.sender == data.sender &&
            message.receiver == data.receiver) ||
            (message.sender == data.receiver &&
                message.receiver == data.sender)));
        this.logger.log('send get_conv to front');
    }
    get_all_conv_info(client, data) {
        const retArray = Array();
        messages
            .filter((message) => message.receiver == data.sender || message.sender == data.sender)
            .map((messageItem) => {
            if (messageItem.sender == data.sender) {
                if (retArray.find((item) => item.receiver == messageItem.receiver) ==
                    undefined) {
                    let tmp = messages.sort((a, b) => a.id - b.id);
                    retArray.push({
                        receiver: messageItem.receiver,
                        last_message_text: tmp
                            .reverse()
                            .find((message) => (message.sender == data.sender &&
                            message.receiver == messageItem.receiver) ||
                            (message.receiver == data.sender &&
                                message.sender == messageItem.receiver)).text,
                        new_conv: false,
                    });
                }
            }
            else {
                if (retArray.find((item) => item.receiver == messageItem.sender) ==
                    undefined) {
                    let tmp = messages.sort((a, b) => a.id - b.id);
                    retArray.push({
                        receiver: messageItem.sender,
                        last_message_text: tmp
                            .reverse()
                            .find((message) => (message.sender == data.sender &&
                            message.receiver == messageItem.sender) ||
                            (message.receiver == data.sender &&
                                message.sender == messageItem.sender)).text,
                        new_conv: false,
                    });
                }
            }
        });
        console.log('retArray', retArray);
        this.logger.log('GET_CONV recu back');
        client.emit('get_all_conv_info', retArray);
        this.logger.log('send get_all_conv_info to front');
    }
    add_user(client, data) {
        users.push({
            login: data.login,
            socket: client,
        });
        console.log('ADD_USER recu back');
    }
    update_user_socket(client, data) {
        if (users.findIndex((user) => user.login === data.login) >= 0) {
            users[users.findIndex((user) => user.login === data.login)].socket =
                client;
        }
        this.logger.log('UPDATE_USER_SOCKET recu back');
    }
    get_all_users(client) {
        const retArray = Array();
        this.logger.log('GET_ALL_USERS recu back');
        client.emit('get_all_users', users);
        this.logger.log('send get_all_users to front');
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
    (0, websockets_1.SubscribeMessage)('ADD_MESSAGE'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], EventsGateway.prototype, "add_message", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('GET_CONV'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], EventsGateway.prototype, "get_conv", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('GET_ALL_CONV_INFO'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], EventsGateway.prototype, "get_all_conv_info", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('ADD_USER'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], EventsGateway.prototype, "add_user", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('UPDATE_USER_SOCKET'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], EventsGateway.prototype, "update_user_socket", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('GET_ALL_USERS'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], EventsGateway.prototype, "get_all_users", null);
EventsGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: {
            origin: '*',
        },
    })
], EventsGateway);
exports.EventsGateway = EventsGateway;
//# sourceMappingURL=events.gateway.js.map