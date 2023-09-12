import React, { useState } from "react";
import "./ResultNumeric.pcss"
import { Button, Link } from "/src/components/ui";
import { useDispatch } from "react-redux";
import { setStep } from "/src/store/stepSlice"

const ResultNumeric = () => {
    const [result, setResult] = useState("48000")
    const dispatch = useDispatch()

    return (
        <div className="result-numeric-container">
            <div className="result-numeric-container__data">
                <div className="result-numeric-container__data__grid">
                    <div>
                        <h2>Скорость генерации квантового ключа</h2>
                        <Link text="Что это означает?" theme="white"/>
                    </div>

                    <div className="result-numeric-container__data__answer">
                        <h3>{result} bit/s</h3>
                    </div>
                </div>

                <div className="result-numeric-container__data__buttons">
                    <Button onClick={() => navigator.clipboard.writeText(result)} className="result-numeric-container__data__buttons__item" text="Cкопировать значение" icon="copy" theme="yellow"/>
                    <Button onClick={() => dispatch(setStep({step: 1}))} className="result-numeric-container__data__buttons__item" text="Начать заново" icon="circle-arr" theme="white"/>
                </div>

            </div>
        </div>
    );
};

export default ResultNumeric;