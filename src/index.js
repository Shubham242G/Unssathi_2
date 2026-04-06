import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

// Create the app element
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Check if we're in prerendering/hydration mode
if (rootElement.hasChildNodes()) {
  // For prerendered content - hydrate
  ReactDOM.hydrateRoot(rootElement, app);
} else {
  // For normal rendering
  ReactDOM.createRoot(rootElement).render(app);
}