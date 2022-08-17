import React from 'react';

const LogoutButton = ({icon,title}) => {
  return (
    <>
      <button
        className="text-secondary mr-3 py-3 font-medium text-sm hover:text-primary transition-colors duration-500"
      >
        {icon} {title}
      </button>
    </>
  );
};

export default LogoutButton;