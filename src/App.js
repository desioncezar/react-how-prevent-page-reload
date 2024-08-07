import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// Primereac
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

// Custom CSS
import './App.css';

// Components
import HookDecision from './components/HookDecision';

// Pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {

  return (
    <>
      <Suspense>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/HookDecision" element={<HookDecision />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default React.memo(App);
