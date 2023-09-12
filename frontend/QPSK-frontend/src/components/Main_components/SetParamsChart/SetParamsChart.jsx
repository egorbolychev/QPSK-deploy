import React, { useState, useEffect, useLayoutEffect } from "react";
import "./SetParamsChart.pcss"
import { BackBtn, BackBtn2, Button, Select, Link } from "/src/components/ui";
import Grid from "/src/components/shared/Grid/Grid.jsx"
import Alert from "/src/components/shared/Alert/Alert.jsx";
import MinMax from "./MinMax/MinMax.jsx";
import ChartExample from "./ChartExmple/ChartExample.jsx";
import ParamModal from "./ParamModal/ParamModal.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "/src/store/modalSlice";
import { setSelectedParam, setParamSet } from "/src/store/paramSlice";
import axios from 'axios';
import { API_SERVER } from '/src/Variables';


const SetParamsChart = () => {
    const dispatch = useDispatch()
    const selectedParam = useSelector(state => state.params.selectedParam)
    const params = useSelector(state => state.params.paramSet)
    const options = params.length > 0 ? params.map(item => {
        return {label: item.name, val: item.id, description: item.description}
    }) : []

    const protocol = useSelector(state => state.step.protocol)

    const refreshParams = () => {
        let filter = "?protocol=" + protocol 
        if (selectedParam?.val) filter += "&&apart_from=" + selectedParam.val
        let url = API_SERVER + "/api/protocol_params/" + filter 
        axios.get(url
        ).then(data => {
            dispatch(setParamSet({params: data.data}))
        })
    }

    useLayoutEffect(() => {
        console.log(selectedParam)
        refreshParams()
    }, [selectedParam])

    return (
        <div>
            <div className="param-header">
                <div className="param-header__left">
                    <BackBtn step={2}/>
                    <BackBtn2 step={1} text="Текущий протокол: BB84"/>
                    <BackBtn2 step={2} text="Тип данных: График"/>
                </div>
                <Button text="Справочник" icon="notebook" />
            </div>

            <div className="param-container">
                <div>
                    <h1>Выберите параметр оптимизации</h1>
                    <Select className="param-container__select"
                     value={selectedParam}
                     onChange={(val) => dispatch(setSelectedParam({selectedParam: val}))}
                     options={options}
                    />
                    <Link text="Как выбрать"/>

                    <h1>Введите параметры графика</h1>
                    <MinMax />
                    <div className="param-container__btn">
                    <Button disabled={!selectedParam?.val} onClick={() => dispatch(setActiveTab({value: "paramModal"}))} text="Изменить остальные параметры" iconAfter="arr-right" />
                    </div>
                    <Alert time={30} className="param-alert__item" />
                </div>

                <div>
                    <h1>Пример результата</h1>
                    <ChartExample />
                </div>

            </div>
        <ParamModal activeTab="paramModal" />
        </div>
    );
};

export default SetParamsChart