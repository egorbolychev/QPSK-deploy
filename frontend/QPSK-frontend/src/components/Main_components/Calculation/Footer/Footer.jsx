import React, { useState, useEffect } from "react";
import "./Footer.pcss"
import { ProgressBar, Button } from "/src/components/ui";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { setStep } from "/src/store/stepSlice"
import axios from "axios"
import { API_SERVER } from '/src/Variables';

const MainCalc = () => {
    const [finished, setFinished] = useState(false)
    const dispatch = useDispatch()
    const [percents, setPersents] = useState("0")

    const UpdateProgress = (task_id, id) => {
        let url = API_SERVER + `/api/index/${task_id}`
        axios.get(url
        ).then(data => {
            if (data.data.data === "Done") {
                setFinished(true)
                setPersents(100)
                clearTimeout(id)
                id = 0
                return 
            }
            if (data.data.data?.percent) {
                setPersents(data.data.data?.percent)
            }
        })
        id = setTimeout(UpdateProgress, 500, task_id, id)
    }

    const StartProgress = () => {
        let url = API_SERVER + `/api/index/`
        axios.post(url, {}
        ).then(data => {
            UpdateProgress(data.data.task_id)
        })
    }

    useEffect(() => {
        StartProgress()
    }, [])

    return (
        <div className="footer-container">
            <div className="footer-container__info">
                <p onClick={() => setFinished(!finished)}>{!finished ? "Оптимизируем скорость ключа" : "Готово!"}</p>
                {!finished && <p>Выполнено: <span>{percents}%</span></p>}
            </div>
            <ProgressBar completed={percents}/>
            <div className={classNames(
                "footer-container__buttons",
                {"footer-container__buttons__finished": finished}
             )}>
                {!finished ?
                <Button text="Отмена" theme="white" onClick={() => dispatch(setStep({step: 3}))}/>
                :
                <Button text="Завершить" iconAfter="arr-right" theme="yellow" onClick={() => dispatch(setStep({step: 5}))}/>
                }
            </div>
        </div>
    );
};

export default MainCalc