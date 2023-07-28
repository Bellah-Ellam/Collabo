import React from 'react';
import ReactDOM from 'react-dom/client';
// import { AuthContext } from './Context/AuthContext'
import './index.css';
import App from './App';
import './App.css'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
