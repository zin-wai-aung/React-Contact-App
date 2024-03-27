import React from 'react'

const LoadingComponent = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-800"></div>
    </div>
  );
}

export default LoadingComponent