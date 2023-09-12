import React from "react";
import "./Button.pcss"
import classNames from "classnames";
import {Icon} from "/src/components/ui"

const Button = ({ onClick, className, icon, text, theme, iconAfter, disabled }) => {

    return (
        <div onClick={onClick}
         className={classNames(
            "main-btn", className, {
                "main-btn__disable": disabled,
                "main-btn__blue-outline": theme === "blue-outline",
                "main-btn__yellow": theme === "yellow",
                "main-btn__white": theme === "white",
            }
         )}>
            {icon && <Icon type={icon} width="22" height="22"/>}
            <p>{text}</p>
            {iconAfter && <Icon type={iconAfter} width="22" height="22"/>}
        </div>
    );
};

Button.defaultProps = {
    onClick: null,
    icon: null,
    text: "Кнопка",
    theme: "blue-outline",
  };

export default Button