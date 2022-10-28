import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'flowbite';

import './index.css';
import App from './App';
import { ContextProvider } from './context/mainContext';
import LandingPageContextProvider from './context/landingPage/LandingPageContext';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// );


const rootNode = document.getElementById('root');
ReactDOM.render(
  <Router>
    <ContextProvider>
      <LandingPageContextProvider>
        <App />
      </LandingPageContextProvider>
    </ContextProvider>
  </Router>,
  rootNode
);