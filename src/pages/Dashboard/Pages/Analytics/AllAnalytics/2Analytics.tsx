import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    month: "Mar",
    investment: 100000,
    sell: 241,
    revenue: 10401,
  },
  {
    month: "Apr",
    investment: 200000,
    sell: 423,
    revenue: 24500,
  },
  {
    month: "May",
    investment: 500000,
    sell: 726,
    revenue: 67010,
  },
  {
    month: "Jun",
    investment: 500000,
    sell: 529,
    revenue: 40405,
  },
  {
    month: "Jul",
    investment: 600000,
    sell: 601,
    revenue: 50900,
  },
  {
    month: "Aug",
    investment: 700000,
    sell: 670,
    revenue: 61000,
  },
];

const Analytics2 = () => {
  return (
    <div className="card bg-base-100  border shadow-lg">
      <div className="card-body hover:bg-cyan-100 hover:text-blue-800 hover:scale-105 transition delay-600">
        <h1 className="text-lg font-bold">Current Visits</h1>
        <p className="text-gray">(+43%) than last year</p>

        <ResponsiveContainer height={300}>
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="investment"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#00BFFF"
              fill="#00BFFF"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics2;
