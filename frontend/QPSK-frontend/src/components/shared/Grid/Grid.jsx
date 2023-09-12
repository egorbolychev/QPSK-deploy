import React, { useState } from "react";
import "./Grid.pcss"
import { Input, Icon } from "/src/components/ui";
import Description from "./Description.jsx"
import { useSelector, useDispatch } from "react-redux";
import { changeParamSet } from "/src/store/paramSlice";
import classNames from "classnames";


const Grid = ({className}) => {
    const [hover, setHover] = useState(-1)
    const params = useSelector(state => state.params.paramSet)
    const dispatch = useDispatch()

    const handleChange = (e, i) => {
        let val = {...params[i]}
        val.value = e.target.validity.valid ? e.target.value : val.value
        dispatch(changeParamSet({value: [val, i]}))
    }

    return (
        <div className={classNames("param-grid", className)}>
            {params.length > 0 && params.map((item, index) => 
                <div className="grid-item" key={index}>
                    <div className="grid-item__question">
                        <h5>{item.name}</h5>
                        <div style={{position: "relative", height: "22px"}} onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(-1)}>
                        <Icon type={hover === index ? "question-hover": "question"} width="20" heigth="20" />
                        {hover === index && <Description param={item} />}
                        {/* <Alert param={item} /> */}
                        </div>
                    </div>
                    <Input value={item.value} onChange={(e) => handleChange(e, index)} pattern="[0-9.]*"/>
                    <p>Область значений: {item.lower_bound} ≤ {item.variable} ≤ {item.upper_bound}</p>
                </div>
            )}
        </div>
    );
};

export default Grid