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

const messages = Array<{id: number, sender: string, receiver: string, text: string}>();

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

    @SubscribeMessage('ADD_MESSAGE')
    add_message(
        client: Socket,
        data: {
                sender: string,
                receiver: string,
                text: string
        }) {
        
        messages.push({
            id: messages.length,
            sender: data.sender,
            receiver: data.receiver,
            text: data.text
        })
            
        console.log(data)
        console.log(client.id)
        this.logger.log("add_message");
        // this.io.to(client.id).emit('newClient');
    }

    @SubscribeMessage('GET_CONV')
    get_conv(
        client: Socket,
        data: {
            sender: string,
            receiver: string,
        })
        {            
            console.log(data.sender)
            console.log(client.id)
            this.logger.log("get_conv");
            client.emit('get_conv', messages.sort((a, b) => a.id - b.id).filter(message => (message.sender == data.sender && message.receiver == data.receiver) || (message.sender == data.receiver && message.receiver == data.sender)));
            // client.emit('get_conv');
    }

    @SubscribeMessage('GET_ALL_CONV_INFO')
    get_all_conv_info(
        client: Socket,
        data: {
            sender: string,
        })
        {

            const retArray = Array<{receiver: string, last_message_text: string}>()

            messages.filter((message) => (message.receiver == data.sender || message.sender == data.sender)).map(messageItem => {
                if (messageItem.sender == data.sender) {
                    if (retArray.find(item => item.receiver == messageItem.receiver) == undefined) {
                        let tmp = messages.sort((a, b) => a.id - b.id)
                        retArray.push({receiver: messageItem.receiver, last_message_text: tmp.reverse().find(message => (message.sender == data.sender && message.receiver == messageItem.receiver) || message.receiver == data.sender && message.sender == messageItem.receiver).text})
                    }
                } else {
                    if (retArray.find(item => item.receiver == messageItem.sender) == undefined) {
                        let tmp = messages.sort((a, b) => a.id - b.id)
                        retArray.push({receiver: messageItem.sender, last_message_text: tmp.reverse().find(message => (message.sender == data.sender && message.receiver == messageItem.sender) || message.receiver == data.sender && message.sender == messageItem.sender).text})
                    }
                }
            })

            console.log(retArray)

            client.emit('get_all_conv_info', retArray);

            // console.log(data.sender)
            // console.log(client.id)
            this.logger.log("get_all_conv_info");
            // // client.emit('get_conv');
    }

    handleConnection(client: Socket) {
        this.logger.log(`new client connected ${client.id}`);
    }

    handleDisconnect(client: Socket) {
        this.logger.log(`client ${client.id} disconnected`);
    }
}