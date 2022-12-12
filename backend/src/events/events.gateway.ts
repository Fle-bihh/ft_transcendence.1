import {
    ConnectedSocket,
    MessageBody,
    WebSocketGateway,
    SubscribeMessage,
    WebSocketServer,
} from '@nestjs/websockets';
import { createServer } from "http";
import { Socket } from 'socket.io';
import { Server } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway({
    cors: {
        origin: '*', // on accepte les requetes venant de partout
    },
})
export class EventsGateway {
    private logger: Logger = new Logger('AppGateway');

    @WebSocketServer()
    httpServer = createServer();
    io = new Server(this.httpServer);

    @SubscribeMessage('CONNECT')
    connect() {
        this.logger.log("connected serverside")
    }

    @SubscribeMessage('TEST1')
    test1(
        client: Socket,
        data: {
            user: {
                login: string,
                nickname: string
            },
            test: number
        }) {
            
        console.log(data)
        console.log(client.id)
        this.logger.log("connected testtsets");
        this.io.to(client.id).emit('newClient');

    }

    handleConnection(client: Socket) {
        this.logger.log(`new client connected ${client.id}`);
    }

    handleDisconnect(client: Socket) {
        this.logger.log(`client ${client.id} disconnected`);
    }
}