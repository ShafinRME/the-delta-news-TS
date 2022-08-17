import React from "react";

const FooterNewTitle = ({ title }: { title: string }) => {
  return (
    <>
      <h1 className="uppercase text-sm font-semibold text-secondary">
        {title}
      </h1>
    </>
  );
};

export default FooterNewTitle;
