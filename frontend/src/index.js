import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Modal from 'react-modal';
//-Redux main components
import { Provider } from 'react-redux';
import { store } from './app/store';


const container = document.getElementById('root');
const root = createRoot(container);
Modal.setAppElement(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

