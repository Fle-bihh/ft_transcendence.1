import {
  ConnectedSocket,
  MessageBody,
  WebSocketGateway,
  SubscribeMessage,
  WebSocketServer,
} from '@nestjs/websockets';
import { createServer } from 'http';
import { Socket } from 'socket.io';
import { Server } from 'socket.io';
import { Logger } from '@nestjs/common';
import { Deflate } from 'zlib';
// ManyToMany;

const messages = Array<{
  id: number;
  sender: string;
  receiver: string;
  text: string;
  time: Date;
}>();
const users = Array<{ login: string; socket: Socket }>();

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
    this.logger.log('connected serverside');
  }

  @SubscribeMessage('ADD_MESSAGE')
  add_message(
    client: Socket,
    data: {
      sender: string;
      receiver: string;
      text: string;
    },
  ) {
    const actualTime: Date = new Date();
    messages.push({
      id: messages.length,
      sender: data.sender,
      receiver: data.receiver,
      text: data.text,
      time: new Date(),
    });
    this.logger.log('ADD_MESSAGE recu back');

    this.get_all_conv_info(client, { sender: data.sender });
    users
      .find((user) => user.login === data.receiver)
      .socket.emit('new_message');
    this.logger.log('send new_message to front', data.receiver);
  }

  @SubscribeMessage('GET_CONV')
  get_conv(
    client: Socket,
    data: {
      sender: string;
      receiver: string;
    },
  ) {
    this.logger.log('GET_CONV recu back', data);

    client.emit(
      'get_conv',
      messages
        .sort((a, b) => a.id - b.id)
        .filter(
          (message) =>
            (message.sender == data.sender &&
              message.receiver == data.receiver) ||
            (message.sender == data.receiver &&
              message.receiver == data.sender),
        ),
    );
    this.logger.log('send get_conv to front', data.sender);
  }

  @SubscribeMessage('GET_ALL_CONV_INFO')
  get_all_conv_info(
    client: Socket,
    data: {
      sender: string;
    },
  ) {
    this.logger.log('GET_ALL_CONV_INFO recu back', data);
    const retArray = Array<{
      receiver: string;
      last_message_text: string;
      new_conv: boolean;
      time: Date;
    }>();

    messages
      .filter(
        (message) =>
          message.receiver == data.sender || message.sender == data.sender,
      ) // messages avec sender
      .map((messageItem) => {
        if (messageItem.sender == data.sender) {
          // si je suis sender
          if (
            retArray.find((item) => item.receiver == messageItem.receiver) ==
            undefined
          ) {
            // si retArray n'a pas encore la conv avec ce receiver
            let tmp = messages.sort((a, b) => a.id - b.id);
            retArray.push({
              receiver: messageItem.receiver,
              last_message_text: tmp
                .reverse()
                .find(
                  (message) =>
                    (message.sender == data.sender &&
                      message.receiver == messageItem.receiver) ||
                    (message.receiver == data.sender &&
                      message.sender == messageItem.receiver),
                ).text,
              new_conv: false,
              time: tmp
                .reverse()
                .find(
                  (message) =>
                    (message.sender == data.sender &&
                      message.receiver == messageItem.receiver) ||
                    (message.receiver == data.sender &&
                      message.sender == messageItem.receiver),
                ).time,
            });
          }
        } else {
          if (
            retArray.find((item) => item.receiver == messageItem.sender) ==
            undefined
          ) {
            let tmp = [...messages.sort((a, b) => a.id - b.id)];
            console.log('tmp time', tmp[0].time);
            retArray.push({
              receiver: messageItem.sender,
              last_message_text: tmp
                .reverse()
                .find(
                  (message) =>
                    (message.sender == data.sender &&
                      message.receiver == messageItem.sender) ||
                    (message.receiver == data.sender &&
                      message.sender == messageItem.sender),
                ).text,
              new_conv: false,
              time: tmp
                .reverse()
                .find(
                  (message) =>
                    (message.sender == data.sender &&
                      message.receiver == messageItem.sender) ||
                    (message.receiver == data.sender &&
                      message.sender == messageItem.sender),
                ).time,
            });
          }
        }
      });
    client.emit('get_all_conv_info', retArray);
    this.logger.log('send get_all_conv_info to front', data.sender);
  }

  @SubscribeMessage('ADD_USER')
  add_user(
    client: Socket,
    data: {
      login: string;
    },
  ) {
    console.log('ADD_USER recu back', data);
    users.push({
      login: data.login,
      socket: client,
    });
    users.map((user) => {
      this.get_all_users(user.socket);
    });
  }

  @SubscribeMessage('UPDATE_USER_SOCKET')
  update_user_socket(
    client: Socket,
    data: {
      login: string;
    },
  ) {
    // console.log('users = ', users);
    // console.log('usersdata = ', data.login);
    // console.log('find = ', users.find(user => user.login === data.login) );
    if (users.findIndex((user) => user.login === data.login) >= 0) {
      users[users.findIndex((user) => user.login === data.login)].socket =
        client;
    }

    // console.log(client.id)
    this.logger.log('UPDATE_USER_SOCKET recu back');
    // client.emit('get_conv', messages.sort((a, b) => a.id - b.id).filter(message => (message.sender == data.sender && message.receiver == data.receiver) || (message.sender == data.receiver && message.receiver == data.sender)));
    // client.emit('get_conv');
  }

  @SubscribeMessage('GET_ALL_USERS')
  get_all_users(client: Socket) {
    this.logger.log('GET_ALL_USERS recu back');
    const retArray = Array<{ login: string }>();
    users.map((user, index) => {
      retArray.push({ login: user.login });
    });
    client.emit('get_all_users', retArray);
    this.logger.log('send get_all_users to front', retArray);
  }

  handleConnection(client: Socket) {
    this.logger.log(`new client connected ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`client ${client.id} disconnected`);
  }
}
