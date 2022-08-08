
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,

} from "recharts";

const data = [
  {
    name: "UTIC",
    metas: 40,
    realização:25
  },
  {
    name: "UMC",
    metas: 50,
    realização:47
  },
  {
    name: "UCC",
    metas: 61,
    realização:52
  },
  {
    name: "UAC",
    metas: 31,
    realização:33
  },
  {
    name: "UAF",
    metas: 70,
    realização:80
  },
  {
    name: "DIREX",
    metas: 90,
    realização:100
  },
  {
    name: "UPP",
    metas: 90,
    realização:21
  }
];
class CustomizedLabel extends PureComponent {
  render() {
    const { x, y, stroke, value } = this.props;

    return (
      <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
        {value}
      </text>
    );
  }
}

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
          {/* {payload.value} */}
        </text>
      </g>
    );
  }
}
export default function App() {
  return (
    <AreaChart width={1000} height={400}  data={data}
 >
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name"  
  tick={<CustomizedAxisTick />}
   />
  <YAxis  />
  <CartesianGrid  />
  <Tooltip />
  <Area type="monotone" dataKey="metas" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)"  />
  <Area type="monotone" dataKey="realização" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)"  />
</AreaChart>
  );
}
