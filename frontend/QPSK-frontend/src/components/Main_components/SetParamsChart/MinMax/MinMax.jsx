import React, {useState} from "react";
import "./MinMax.pcss"
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Icon, Input } from "/src/components/ui";
import Description from "../Description/Description.jsx";
import { useDispatch } from "react-redux";
import { setNodeAmount, setLowerBound, setUpperBound } from "/src/store/paramSlice";

const description = [
    {
        name: "Количество узлов",
        description: "Количество узлов"
    },
    {
        name: "Начальная точка",
        description: "Начальная точка"
    },
    {
        name: "Конечная точка",
        description: "Конечная точка"
    },
]

const MinMax = () => {
    const [hover, setHover] = useState(-1)
    const bounds = useSelector(state => state.params)
    const dispatch = useDispatch()

    const handleChange = (e, i) => {
        let val = ""
        
        switch (i) {
            case 0:
                val = e.target.validity.valid ? e.target.value : bounds.nodeAmount
                dispatch(setNodeAmount({nodeAmount: val}))
                break
            case 1:
                val = e.target.validity.valid ? e.target.value : bounds.lowerBound
                dispatch(setLowerBound({lowerBound: val}))
                break
            case 2:
                val = e.target.validity.valid ? e.target.value : bounds.upperBound
                dispatch(setUpperBound({upperBound: val}))
                break
        }
    }
    
    return (
        <div className="min-max-wrapper">
        <div className="min-max-grid">
            <div className="min-max-grid__item">
                <div className="min-max-grid__title">
                    <p>{description[0].name}</p>
                    <div className="min-max-grid__icon" onMouseEnter={() => setHover(0)} onMouseLeave={() => setHover(-1)}>
                    <Icon type={hover === 0 ? "question-hover": "question"} width="20" heigth="20" />
                    {hover === 0 && <Description param={description[0]} className="min-max-grid__description"/>}
                    </div>
                </div>
                <Input value={bounds.nodeAmount} onChange={(e) => handleChange(e, 0)} pattern="[0-9.]*"/>
            </div>

            <div className="min-max-grid__item">
                <div className="min-max-grid__title">
                    <p>{description[1].name}</p>
                    <div className="min-max-grid__icon" onMouseEnter={() => setHover(1)} onMouseLeave={() => setHover(-1)}>
                    <Icon type={hover === 1 ? "question-hover": "question"} width="20" heigth="20" />
                    {hover === 1 && <Description param={description[1]} className="min-max-grid__description"/>}
                    </div>
                </div>
                <Input value={bounds.lowerBound} onChange={(e) => handleChange(e, 1)} pattern="[0-9.]*"/>
            </div>

            <div className="min-max-grid__item">
                <div className="min-max-grid__title">
                    <p>{description[2].name}</p>
                    <div className="min-max-grid__icon" onMouseEnter={() => setHover(2)} onMouseLeave={() => setHover(-1)}>
                    <Icon type={hover === 2 ? "question-hover": "question"} width="20" heigth="20" />
                    {hover === 2 && <Description param={description[2]} className="min-max-grid__description"/>}
                    </div>
                </div>
                <Input value={bounds.upperBound} onChange={(e) => handleChange(e, 2)} pattern="[0-9.]*"/>
            </div>
        </div>
        <span>Чем больше узлов — тем больше время расчёта. Максимум: 40 узлов</span>
        </div>
    );
};

export default MinMax