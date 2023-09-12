import React, { useEffect, useState } from "react";
import "./SetParamsNumeric.pcss"
import { BackBtn, BackBtn2, Button } from "/src/components/ui";
import Grid from "/src/components/shared/Grid/Grid.jsx"
import Alert from "/src/components/shared/Alert/Alert.jsx";


const SetParamsNumeric = () => {

    return (
        <div>
            <div className="param-header">
                <div className="param-header__left">
                    <BackBtn step={2}/>
                    <BackBtn2 step={1} text="Текущий протокол: BB84"/>
                    <BackBtn2 step={2} text="Тип данных: Число"/>
                </div>
                <Button text="Справочник" icon="notebook" />
            </div>
        <h1>Задайте параметры рассчета</h1>
        <Grid/>
        <div className="param-alert">
            <Alert time={3} className="param-alert__item" />
        </div>
        </div>
    );
};

export default SetParamsNumeric