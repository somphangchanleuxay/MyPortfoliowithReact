import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Import from "react-dom/client"
import App from './App.jsx';
import './index.css';

// Use createRoot() to render your root component (App) into the DOM
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);