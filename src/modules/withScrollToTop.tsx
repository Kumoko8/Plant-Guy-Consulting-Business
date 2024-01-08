import React, { useEffect } from 'react';

const withScrollToTop = (WrappedComponent) => {
  const withScrollToTop = (props) => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return <WrappedComponent {...props} />;
  };

  return withScrollToTop;
};

export default withScrollToTop;
