import React, { lazy, Suspense } from 'react';

const LazySignUpClient = lazy(() => import('./SignUpClient'));

const SignUpClient = props => (
  <Suspense fallback={null}>
    <LazySignUpClient {...props} />
  </Suspense>
);

export default SignUpClient;
