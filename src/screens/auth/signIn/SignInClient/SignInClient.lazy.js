import React, { lazy, Suspense } from 'react';

const LazySignInClient = lazy(() => import('./SignInClient'));

const SignInClient = props => (
  <Suspense fallback={null}>
    <LazySignInClient {...props} />
  </Suspense>
);

export default SignInClient;
