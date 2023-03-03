import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './scss/Clear.module.scss'

import { store } from './store/index';
import { Provider } from 'react-redux';
import './firebase';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store/index.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </BrowserRouter >
);
