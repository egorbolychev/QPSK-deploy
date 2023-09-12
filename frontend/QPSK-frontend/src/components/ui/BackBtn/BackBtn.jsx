import React from "react";
import "./BackBtn.pcss"
import classNames from "classnames";
import {Icon} from "/src/components/ui"
import { useDispatch } from "react-redux";
import { setStep } from "/src/store/stepSlice"

const BackBtn = ({ step }) => {
    const dispatch = useDispatch()

    return (
        <div onClick={() => dispatch(setStep({step: step}))} className={classNames("back-btn")}>
            <Icon type="arr-circle-left" width="22" height="22"/>
            <p>Назад</p>
        </div>
    );
};

BackBtn.defaultProps = {
    step: 1,
  };

export default BackBtn