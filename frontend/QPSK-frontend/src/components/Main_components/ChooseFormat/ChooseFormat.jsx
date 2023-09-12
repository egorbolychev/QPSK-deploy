import './ChooseFormat.pcss';
import React, {useLayoutEffect} from 'react';
import { Button, TextArea, BackBtn, BackBtn2 } from '/src/components/ui';
import FAQ from '/src/components/shared/FAQ/FAQ.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setStep, setDataFormat } from "/src/store/stepSlice"
import FormatModal from './FormatModal/FormatModal.jsx';
import { setActiveTab } from "/src/store/modalSlice";
import { setParamSet } from "/src/store/paramSlice";
import axios from 'axios';
import { API_SERVER } from '/src/Variables';

const faqMoc = [
  {
    text: "Как определить формат скорости?",
    id: 1
  },
  {
    text: "За что отвечают определенные параметры в протоколе?",
    id: 2
  },
]

const ChooseFormat = () => {
  const dispatch = useDispatch()
  const protocol = useSelector(state => state.step.protocol)

  const refreshParams = () => {
    let url = API_SERVER + "/api/protocol_params/?protocol=" + protocol 
    axios.get(url
    ).then(data => {
        dispatch(setParamSet({params: data.data}))
    })
  }

  useLayoutEffect(() => {
    refreshParams()
  }, [])

  const nextPage = (format) => {
    dispatch(setDataFormat({dataFormat: format}))
    dispatch(setStep({step: 3}))
  }

  return (
    <div className='format-wrapper'>
        <div className="format-header">
            <div className="format-header__left">
                <BackBtn step={1}/>
                <BackBtn2 step={1} text="Текущий протокол: BB84"/>
            </div>
            <Button text="Справочник" icon="notebook" />
        </div>
      
        <h1>Выберите формат скорости генерации ключа</h1>
        <div>
            <TextArea
                onClick={() => nextPage("chart")}
                className="format-block"
                header={"График"}
                text={"Позволяет посмотреть зависимость скорости генерации квантового ключа от выбранного параметра."}
            />
            <TextArea
                onClick={() => nextPage("numeric")}
                className="format-block"
                header={"Число"}
                text={"Вы получите скорость генерации квантового ключа при заданных параметрах. Его можно скопировать"}
            />
        </div>
        <Button onClick={() => dispatch(setActiveTab({value: "format-modal"}))} text="Посмотреть параметры, используемые в протоколе" className="format-button" iconAfter="arr-right"/>
        <div className='format-faq'>
            <FAQ items={faqMoc} columnAmount={1} border="square"/>
        </div>

        <FormatModal activeTab="format-modal"/>
    </div>
);
}

export default ChooseFormat;
