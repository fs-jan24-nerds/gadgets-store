import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import App from './App.tsx';
import { ColorTheme } from './components/ColorTheme/ColorTheme.tsx';
import { store } from './store/store.ts';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ColorTheme>
          <App />
        </ColorTheme>
      </Router>
    </Provider>
  </React.StrictMode>,
);
