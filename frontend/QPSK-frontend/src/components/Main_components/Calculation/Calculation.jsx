import React, { useState } from "react";
import "./Calculation.pcss"
import { useSelector } from "react-redux";
import { Icon } from "/src/components/ui";
import Description from "./Description/Description.jsx";
import Articles from "./Articles/Articles.jsx"
import Footer from "./Footer/Footer.jsx"


const Calculation = () => {
    const paramSet = useSelector(state => state.params.paramSet)
    const selectedParam = useSelector(state => state.params.selectedParam)
    const dataFormat = useSelector(state => state.step.dataFormat)
    const [hover, setHover] = useState(-1)

    return (
        <div className="calc-main-container">
            <div className="calc-grid">
                <div className="calc-grid__left">
                    <h2>Параметры расчёта</h2>
                    <div className="calc-grid__left__head">
                        <p>Протокол: </p>
                        <p>Тип входных данных: {dataFormat === "chart" ? "График" : "Число"}</p>
                        {dataFormat === "chart" && <p>Параметр оптимизации: {selectedParam.label}</p>}
                    </div>

                    {paramSet?.length > 0 && paramSet.map((param, index) => 
                        <div className="calc-grid__left__item">
                            <div className="calc-grid__left__icon" onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(-1)}>
                            <Icon type={hover === index ? "question-hover": "question-white"} width="20" heigth="20" />
                            {hover === index && <Description param={param} className="calc-param-description" />}
                            </div>
                            <p>{param.name} = {param.value}</p>
                        </div>
                    )}
                </div>

                <div className="calc-grid__right">
                        <Articles />
                </div>
            </div>

            <div className="calc-footer">
                <Footer />
            </div>
        </div>
    );
};

export default Calculation