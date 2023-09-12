import React from "react";
import "./TextArea.pcss"
import classNames from "classnames";
import {Icon} from "/src/components/ui"

const TextArea = ({ header, text, onClick, className, theme }) => {

    return (
        <div onClick={onClick}
         className={classNames(
            "block-area", className, {
                "block-area__blue": theme === "blue",
                "block-area__dark-blue": theme === "dark-blue",
            }
        )}>
            <div className="block-area__text-area">
                <h2>{header}</h2>
                <p>{text}</p>
            </div>
            <Icon type="arr-circle-right" width="32" height="32"/>
        </div>
    );
};

TextArea.defaultProps = {
    onClick: null,
    header: "Заголовок",
    text: "текст...",
    theme: "blue"
  };

export default TextArea