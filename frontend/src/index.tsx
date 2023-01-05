import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/index.scss";
// import { createRoot } from 'react-dom/client';
import { store } from './state/store'
import { Provider } from 'react-redux'
import {BrowserRouter} from 'react-router-dom';  

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// const container = document.getElementById('app');
// const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

