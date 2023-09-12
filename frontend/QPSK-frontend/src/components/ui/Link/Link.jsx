import React from "react";
import "./Link.pcss"
import classNames from "classnames";
import { Icon } from "/src/components/ui"

const Link = ({text, className, theme}) => {
  
  return (
    <div className={classNames("link-area", className, {
        "link-area__black": theme === "black",
        "link-area__white": theme === "white",
    })}>
        <Icon type="arr-right-up" width="16" heigth="16"/>
        <p>{text}</p>
    </div>
  );
};

Link.defaultProps = {
    theme: "black"
};

export default Link;
