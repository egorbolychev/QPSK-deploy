import React from "react";
import "./FAQ.pcss"
import classNames from "classnames";
import { Icon } from "/src/components/ui";

const FAQ = ({className, items, columnAmount, border}) => {

    return (
        <div className={classNames("faq-area", className, {
            "faq-area__border-default": border === "default",
            "faq-area__border-square": border === "square",
        })}>
            <h2>FAQ</h2>
            <div className={classNames("faq-area__grid", {
                "faq-area__grid__one-column": columnAmount == 1,
                "faq-area__grid__two-column": columnAmount == 2,
            })}>
                {items.length > 0 && items.map(item =>
                    <div className="faq-area__item">
                        <Icon type="arr-right-up" width="16" heigth="16"/>
                        <p>{item.text}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

FAQ.defaultProps = {
    columnAmount: 2,
    border: "default",
  };

export default FAQ