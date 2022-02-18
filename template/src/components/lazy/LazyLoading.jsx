import React, { Suspense, lazy } from 'react';

const LazyLoading = (importFunction) => {
    const LazyComponent = lazy(importFunction);
    return (props) => (
        <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent {...props} />
        </Suspense>
    );
};
export default LazyLoading;