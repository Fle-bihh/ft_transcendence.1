import "./App.css";
// import { useState } from "react";
import Chat from "./pages/chat/Chat";
import Versions from "./components/Versions";
import Profil from "./pages/Profil";
import Jeux from "./pages/Jeux";
import Homes from "./pages/Homes";
import Login from "./components/connexion/Login";
import Singup from "./components/connexion/Singup";


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
          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<Singup />} />
          <Route path="/" element={<Homes />} />
          <Route path="/versions" element={<Versions />} />
          <Route path="/jeux" element={<Jeux />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/chat" element={<Chat messages={messages} setMessages={setMessages}/>} />

        </Routes>
      </PersistGate>
  </div>
  )
}

export default App;