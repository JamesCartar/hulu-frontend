import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'flowbite';

import './index.css';
import App from './App';
import { ContextProvider } from './context/mainContext';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// );


const rootNode = document.getElementById('root');
ReactDOM.render(
  <Router>
    <ContextProvider>
      <App />
    </ContextProvider>
  </Router>,
  rootNode
);