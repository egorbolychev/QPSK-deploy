import React from "react";
import "./MainCalc.pcss"
import { useSelector } from "react-redux/es/hooks/useSelector";
import ChooseProtocol from '/src/components/Main_components/ChooseProtocol/ChooseProtocol.jsx'
import SetParamsChart from '/src/components/Main_components/SetParamsChart/SetParamsChart.jsx'
import SetParamsNumeric from '/src/components/Main_components/SetParamsNumeric/SetParamsNumeric.jsx'
import Calculation from "/src/components/Main_components/Calculation/Calculation.jsx";
import ResultNumeric from "/src/components/Main_components/ResultNumeric/ResultNumeric.jsx";
import ResultChart from "/src/components/Main_components/ResultChart/ResultChart.jsx";
import ChooseFormat from "/src/components/Main_components/ChooseFormat/ChooseFormat.jsx";

const MainCalc = () => {
    const step = useSelector(state => state.step)

    switch (step.step) {
        case 1:
            return <div className="main-container"><ChooseProtocol /></div>
        case 2:
            return <div className="main-container"><ChooseFormat /></div>
        case 3:
            switch (step.dataFormat) {
                case "chart": return <div className="main-container"><SetParamsChart /></div>
                case "numeric": return <div className="main-container"><SetParamsNumeric /></div>
            }
        case 4:
            return <Calculation />
        case 5:
            switch (step.dataFormat) {
                case "chart": return <ResultChart />
                case "numeric": return <ResultNumeric />
            }
        default:
            return <ChooseProtocol />
    }
};

export default MainCalc