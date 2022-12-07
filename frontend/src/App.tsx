import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./views/chat/Chat";

const socket = io("http://localhost:3001");

function App() {
  const socket = io('http://localhost:3000');
      socket.on('connect', function() {
        console.log('Connected');

        socket.emit('events', { test: 'test' });
        // socket.emit('identity', 0, response =>ß { console.log('Identity:', response) },);
      });
      socket.on('events', function(data) {
        console.log('event', data);
      });
      socket.on('exception', function(data) {
        console.log('event', data);
      });
      socket.on('disconnect', function() {
        console.log('Disconnected');
      });

      return (
        <div className='app'>
            <Chat />
        </div>
      )
}

export default App;