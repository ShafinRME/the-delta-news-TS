import React from "react";
import Analytics1 from "./AllAnalytics/1Analytics";
import Analytics2 from "./AllAnalytics/2Analytics";
import Analytics3 from "./AllAnalytics/3Analytics";
import Analytics4 from "./AllAnalytics/4Analytics";

const Analytics = () => {
  return (
    <div className="max-w-auto">
      <div className="grid grid-cols-1 gap-y-20 my-12 ">
        <div className="grid gap-5 lg:grid-cols-12  ">
          <div className="lg:col-span-7">
            <Analytics1 />
          </div>
          <div className="lg:col-span-5">
            <Analytics3 />
          </div>
        </div>
        <div className="grid gap-5 lg:grid-cols-12 w-10 lg:w-full ">
          <div className="lg:col-span-5">
            <Analytics4 />
          </div>
          <div className="lg:col-span-7">
            <Analytics2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
