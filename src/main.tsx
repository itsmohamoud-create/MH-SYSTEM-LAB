import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // <--- ADDED IMPORT
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  // Defensive check for the root element, good practice
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter> // <--- ADDED WRAPPER
      <App />
    </BrowserRouter> // <--- ADDED WRAPPER
  </React.StrictMode>
);
