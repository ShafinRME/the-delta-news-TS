import React from "react";

const FaQ = ({ title, description }) => {
  return (
    <>
      <div className="collapse collapse-plus mb-2 shadow-sm border border-warning rounded-md">
        <input type="checkbox" className="peer px-8 " />
        <div className="collapse-title p-4 text-secondary font-semibold peer-checked:text-primary-content">
          {title}
        </div>
        <div className="collapse-content">
          <p className="text-secondary">{description}</p>
        </div>
      </div>
    </>
  );
};

export default FaQ;
