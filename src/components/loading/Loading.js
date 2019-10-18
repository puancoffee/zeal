import React from 'react';
function WithLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return (<Component {...props} />);
    return (<div className="spinner-border text-dark" role="status">
    <span className="sr-only">Loading...</span>
  </div>);
  }
}
export default WithLoading;