import React, { lazy, Suspense } from 'react';

const LazySignInOwner = lazy(() => import('./SignInOwner'));

const SignInOwner = props => (
  <Suspense fallback={null}>
    <LazySignInOwner {...props} />
  </Suspense>
);

export default SignInOwner;
