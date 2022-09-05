
import {
  BarChart,
  Bar,
 ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 6800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  
];

const TotalCardChart = () => {
  return (
    <ResponsiveContainer width={110} height={70}>
      <BarChart
        width={300}
        height={100}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <Bar dataKey="pv" fill="#F6621E" />
        <Bar dataKey="uv" fill="#18BB70" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TotalCardChart;
