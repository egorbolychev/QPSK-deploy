import React from "react";
import "./BackBtn2.pcss"
import classNames from "classnames";
import {Icon} from "/src/components/ui"
import { useDispatch } from "react-redux";
import { setStep } from "/src/store/stepSlice"

const BackBtn = ({ step, text }) => {
    const dispatch = useDispatch()

    return (
        <div onClick={() => dispatch(setStep({step: step}))} className={classNames("back2-btn")}>
            <Icon type="arr-undo-left" width="22" height="22"/>
            <p>{text}</p>
        </div>
    );
};

BackBtn.defaultProps = {
    step: 1,
    text: "Назад 2",
  };

export default BackBtn