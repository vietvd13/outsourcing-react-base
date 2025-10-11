import React, { Suspense } from 'react';

export function withSuspense(importFn) {
  const LazyComponent = React.lazy(importFn);
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <LazyComponent />
    </Suspense>
  );
}
