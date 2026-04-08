import React from 'react';
import ReactDOM, { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);



if (rootElement.hasChildNodes()) {
  // Prerendered HTML exists - hydrate it
  hydrateRoot(rootElement, <App />);
} else {
  // Normal SPA mount
  createRoot(rootElement).render(<App />);
}