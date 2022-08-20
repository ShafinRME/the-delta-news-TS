import React from 'react';

const DashboardSectionTitle = ({ title }: { title: string }) => {
  return (
    <>
      <h1 className=" py-4   z-10 sticky top-0 bg-base-100  uppercase fontFamily-['poppins'] text-neutral font-[700] text-xs  tracking-wide">
        {title}
      </h1>
    </>
  );
};

export default DashboardSectionTitle;