import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import 'flowbite';

import './index.css';
import App from './App';
import { ContextProvider } from './context/mainContext';
import LandingPageContextProvider from './context/landingPage/LandingPageContext';

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
  <Router>
    <ContextProvider>
      <LandingPageContextProvider>
        <App />
      </LandingPageContextProvider>
    </ContextProvider>
  </Router>
);


// const rootNode = document.getElementById('root');
// ReactDOM.render(
//   <Router>
//     <ContextProvider>
//       <LandingPageContextProvider>
//         <App />
//       </LandingPageContextProvider>
//     </ContextProvider>
//   </Router>,
//   rootNode
// );