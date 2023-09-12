import React from "react";
import "./Alert.pcss"
import classNames from "classnames";
import {Button} from "/src/components/ui"
import { useDispatch } from "react-redux";
import { setStep } from "/src/store/stepSlice"

const Alert = ({ time, onClick, className }) => {
    const dispatch = useDispatch()

    return (
        <div onClick={onClick}
         className={classNames(
            "alert-area", "alert-area__blue", className
        )}>
            <h2>Внимание!</h2>
            <p>Рассчет будет длиться около <span>{time} минут.</span></p>
            <p>Убедитесь в том, что вы ввели всё правильно. Для расчёта нажмите кнопку «Оптимизировать»</p>
            <Button theme="yellow" text="Оптимизировать" onClick={() => dispatch(setStep({step: 4}))}/>
        </div>
    );
};

Alert.defaultProps = {
    onClick: null,
    header: "Заголовок",
    text: "текст...",
    theme: "blue"
  };

export default Alert