import React, { lazy, Suspense } from 'react';

const LazySignUpOwner = lazy(() => import('./SignUpOwner'));

const SignUpOwner = props => (
  <Suspense fallback={null}>
    <LazySignUpOwner {...props} />
  </Suspense>
);

export default SignUpOwner;
