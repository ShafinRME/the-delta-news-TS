import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts";

const Analytics3 = () => {
  const data = [
    {
      subject: "Bangladesh",
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: "Chain",
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "Canada",
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "Australia",
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: "India",
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: "England",
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];

  return (
    <div className="card bg-base-200   shadow-sm">
      <div className="card-body hover:bg-cyan-100 hover:text-blue-800 hover:scale-105 transition delay-600">
        <h1 className="text-lg font-bold">Current Visits</h1>
        <div style={{}}>
          <RadarChart outerRadius={90} width={350} height={300} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar
              name="Mike"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
            <Radar
              name="Lily"
              dataKey="B"
              stroke="#82ca9d"
              fill="#82ca9d"
              fillOpacity={0.6}
            />
            <Legend />
          </RadarChart>
        </div>
      </div>
    </div>
  );
};

export default Analytics3;
