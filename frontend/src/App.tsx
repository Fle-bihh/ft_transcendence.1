import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./views/chat/Chat";

function App() {
  const socket = io("http://localhost:5001");
  socket.on("newClient", () => {
    console.log("test1");
  });
  
  socket.on("disconnect", () => {
    console.log(socket.id);
  });
      return (
        <div className='app'>
            <Chat />
            <button onClick={() => {
              socket.emit('TEST1', {
                user: {
                  login: 'fle-biha',
                  nickname: 'oui'
                },
                test: 50
              });
            }}>
              Test1
            </button>
        </div>
      )
}

export default App;