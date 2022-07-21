import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter> 
    
    <React.StrictMode> {/* // <React.StrictMode> = > Verifica se ocorreu algum erro no processo */}

      <App />

    </React.StrictMode>

  </BrowserRouter>
);
