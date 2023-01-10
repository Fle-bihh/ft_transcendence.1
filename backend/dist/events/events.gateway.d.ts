/// <reference types="node" />
import { Socket } from 'socket.io';
import { Server } from 'socket.io';
export declare class EventsGateway {
    private logger;
    httpServer: import("http").Server<typeof import("http").IncomingMessage, typeof import("http").ServerResponse>;
    io: Server<import("socket.io/dist/typed-events").DefaultEventsMap, import("socket.io/dist/typed-events").DefaultEventsMap, import("socket.io/dist/typed-events").DefaultEventsMap, any>;
    connect(): void;
    add_message(client: Socket, data: {
        sender: string;
        receiver: string;
        text: string;
    }): void;
    get_conv(client: Socket, data: {
        sender: string;
        receiver: string;
    }): void;
    get_all_conv_info(client: Socket, data: {
        sender: string;
    }): void;
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
}
