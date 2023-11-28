import React from 'react';
import { createRoot } from 'react-dom/client';
import Modal from 'react-modal';
//-CSS
import './styles/index.css';
import './styles/modules/default_form.css';
import './styles/modules/dishes.css';
import './styles/modules/menu_sections.css'
import App from './App';
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

