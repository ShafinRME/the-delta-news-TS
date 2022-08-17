import React from 'react';

const P = ({ children }) => {
  return (
    <>
      <p className="text-neutral text-lg md:text-base font-medium md:font-normal">{children}</p>
    </>
  );
};

export default P;