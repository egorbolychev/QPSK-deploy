import React from "react";
import "./ChartExample.pcss"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Label, ResponsiveContainer } from 'recharts';


const data  = [
    {
      x: 0,
      y: 200,
    },
    {
      x: 10,
      y: 160,
    },
    {
      x: 20,
      y: 135,
    },
    {
      x: 30,
      y: 130,
    },
    {
      x: 40,
      y: 105,
    },
    {
      x: 50,
      y: 70,
    },
    {
      x: 60,
      y: 60,
    },
    {
      x: 70,
      y: 30,
    },
    {
      x: 80,
      y: 20,
    },
    {
      x: 90,
      y: 19,
    },
    {
      x: 100,
      y: 17,
    },

  ];

const ChartExample = () => {

    return (
        <div style={{height: "550px", marginTop: "25px"}}>
            <ResponsiveContainer width="100%" height="100%">
            <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 50,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" label={{value: "param", position: "bottom"}}/>
            <YAxis>
                <Label
                    style={{
                        textAnchor: "middle",
                    }}
                position="left"
                angle={270} 
                value={"QKD"} />
            </YAxis>
            <Tooltip />
            <Line type="monotone" dataKey="y" stroke="#136DC2" />
            </LineChart>
        </ResponsiveContainer>
        </div>
    );
};

export default ChartExample