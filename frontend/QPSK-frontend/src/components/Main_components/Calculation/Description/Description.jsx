import React from "react";
import "./Description.pcss"
import { Button } from "/src/components/ui";
import classNames from "classnames";

const Description = ({param, className}) => {

    return (
        <div className={classNames("param-description", className)}>
            <h5>{param.name}</h5>
            <p>{param.description}</p>
            <div className="area-button">
                <Button className="area-button__item" text="Узнать больше"/>
            </div>
        </div>
    );
};

export default Description