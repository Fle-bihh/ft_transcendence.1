import "./App.css";
import { useState } from "react";
import Chat from "./Pages/chat/Chat";
import io from 'socket.io-client';
import Register from "./Pages/chat/Register";
import Login from "./Pages/chat/Login";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from './State/store'
// import { createReducer, handleAction } from 'reducer-utils';
// import { connect } from 'react-redux';


function App() {
  

return (
  <div className='app'>
      <PersistGate loading={null} persistor={persistor}>
        <h1>Bonjour</h1>
      </PersistGate>
  </div>
      )
}

// // Use the connect function to connect your component to the Redux store
// export default connect(mapStateToProps)(YourComponent);
export default App;