import React from "react";
import "./ProgressBar.pcss"

const ProgressBar = ({completed}) => {
  
  return (
    <div className="container-bar">
      <div style={{width: `${completed}%`}} className="container-bar__progress">
      </div>
    </div>
  );
};

ProgressBar.defaultProps = {
    completed: 40,
};

export default ProgressBar;
