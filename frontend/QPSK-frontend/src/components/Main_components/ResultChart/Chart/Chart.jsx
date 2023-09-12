import React from "react";
import "./Chart.pcss"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Label, ResponsiveContainer } from 'recharts';

const Chart = ({data}) => {
    
    return (
            <ResponsiveContainer width="100%" height="100%">
            <LineChart
            width={500}
            data={data}
            margin={{
                top: 30,
                right: 30,
                left: 20,
                bottom: 30,
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
    );
};

export default Chart