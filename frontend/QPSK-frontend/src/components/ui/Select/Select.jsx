import React, { useState } from "react";
import "./Select.pcss"
import classNames from "classnames";
import {Icon} from "/src/components/ui";

const Select = ({
    value,
    onChange,
    options,
    className
    }) => {

    const [active, setActive] = useState(false)
    const [hover, setHover] = useState(-1)

    const handleChange = (opt) => {
        onChange({
            label: opt.label,
            val: opt.val
        })
        setActive(false)
    }

    return (
        <div className={classNames("custom-select-container", className)}>
            <div className="selected-header" onClick={() => setActive(prevState => !prevState)}>
                <div className="selected-header__text">
                    <p>{value.label}</p>
                </div>
                <Icon className={active && "selected-header__rotate"} type="alt-arrow-down"/>
            </div>

            {active && (
                <div className="options-container">
                <ul className="select-options">
                    {options.length > 0 && options.map((option, index) =>
                        <li 
                            className="custom-select-option"
                            data-name={option.label}
                            key={option.val}
                            onClick={() => handleChange(option)}
                        >
                            <p>{option.label}</p>
                            {option?.description &&
                            <div className="icon-wrapper" onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(-1)}>
                                <Icon type={hover === index ? "question-hover": "question"} width="20" heigth="20" />
                            </div>}
                        </li>
                    )}
                </ul>
                </div>
            )}
        </div>
    );
};

Select.defaultProps = {
    value: {label: "Параметры..."},
    options: [],
};

export default Select;