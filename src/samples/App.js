import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// Primereac
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

// Components
import ClassDropdownDecision from './components/ClassDropdownDecision';
import HookDropdownDecision from './components/HookDropdownDecision';
import QueryDropdownDecision from './components/QueryDropdownDecision';
import HookFormDropdownDecision from './components/HookFormDropdownDecision';
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
          <Route exact path="/ClassDropdownDecision" element={<ClassDropdownDecision />} />
          <Route exact path="/HookDropdownDecision" element={<HookDropdownDecision />} />
          <Route exact path="/QueryDropdownDecision" element={<QueryDropdownDecision />} />
          <Route exact path="/HookFormDropdownDecision" element={<HookFormDropdownDecision />} />
          <Route exact path="/HookDecision" element={<HookDecision />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default React.memo(App);
