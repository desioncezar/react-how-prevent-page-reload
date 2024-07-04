import React from 'react';
//import { Route, Routes } from 'react-router-dom';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

// Components
//import Header from './components/Header';

// Pages
import Home from './pages/Home';
//import NotFound from './pages/NotFound';

function App() {
 
  return (
    <Home />
  );
}

export default React.memo(App);
