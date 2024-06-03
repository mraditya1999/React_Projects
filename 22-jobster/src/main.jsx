import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { store } from './store';
import { Provider } from 'react-redux';

import 'normalize.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App tab='home' />
  </Provider>
);
