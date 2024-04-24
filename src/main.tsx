import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { store } from './store/store.ts';
import { ColorTheme } from './components/ColorTheme/ColorTheme.tsx';

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
