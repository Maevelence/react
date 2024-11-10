import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ModState } from './context/ModContext';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <ModState>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ModState>
  </BrowserRouter>
);
