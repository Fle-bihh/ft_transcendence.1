/// <reference types="node" />
import { Socket } from 'socket.io';
import { Server } from 'socket.io';
export declare class EventsGateway {
    private logger;
    httpServer: import("http").Server<typeof import("http").IncomingMessage, typeof import("http").ServerResponse>;
    io: Server<import("socket.io/dist/typed-events").DefaultEventsMap, import("socket.io/dist/typed-events").DefaultEventsMap, import("socket.io/dist/typed-events").DefaultEventsMap, any>;
    connect(): void;
    test1(client: Socket, data: {
        user: {
            login: string;
            nickname: string;
        };
        test: number;
    }): void;
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
}
