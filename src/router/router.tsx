import { Suspense } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Root from '../router/Root/Root.tsx';
import LoadingFallback from '../router/LoadingFallback/LoadingFallback.tsx';
import Main from '../components/Main';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route
        path='/?'
        element={
          <Suspense fallback={<LoadingFallback />}>
            <Main />
          </Suspense>
        }
      />
    </Route>,
  ),
);

export default router;
