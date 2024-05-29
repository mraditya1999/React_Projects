import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { Toaster } from 'react-hot-toast';
import { store } from './store/store.js';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <Toaster
      position='top-center'
      toastOptions={{
        style: {
          textTransform: 'capitalize',
        },
      }}
    />
  </Provider>
);
