// import { useState } from "react";
import Chat from "./pages/chat/Chat";
import Versions from "./components/versions/Versions";
import Profile from "./pages/profile/Profile";
import Pong from "./pages/pong/Pong";
import Home from "./pages/home/Home";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";


// import io from 'socket.io-client';
import { PlayCircleFilledSharp } from "@mui/icons-material";
import {BrowserRouter, Routes, Route, Router} from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from './state/store'
import { useState, useEffect } from "react";
// import { createReducer, handleAction } from 'reducer-utils';
// import { connect } from 'react-redux';

function App() {

  const [messages, setMessages] = useState(Array<{id: number, sender: string, receiver: string, text: string, groupText: boolean}>())

return (
  <div className='app'>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/versions" element={<Versions />} />
          <Route path="/pong" element={<Pong />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<Chat messages={messages} setMessages={setMessages}/>} />

        </Routes>
      </PersistGate>
  </div>
  )
}

export default App;