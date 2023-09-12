import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './FormatModal.pcss'
import { setActiveTab } from '/src/store/modalSlice'
import classNames from 'classnames';
import { Button, Icon } from "/src/components/ui"
import Description from './Description.jsx';

const FormatModal = ({ activeTab }) => {
    const dispatch = useDispatch()
    const modal = useSelector(state => state.modal)
    const params = useSelector(state => state.params)
    const [hover, setHover] = useState(-1)

    return(
        <div className={classNames({'format-modal active': modal.activeTab === activeTab,
                                    'format-modal': modal.activeTab !== activeTab,})} onClick={() => dispatch(setActiveTab({value: ''}))}>
            <div className={classNames({'format-modal-content active': modal.activeTab === activeTab,
                                    'format-modal-content': modal.activeTab !== activeTab,})} onClick={e => e.stopPropagation()}>
                <div className='modal-back-btn'>
                    <Button text="Вернуться" icon="arr-circle-left" onClick={() => dispatch(setActiveTab({value: ''}))}/>
                </div>
                <div>
                    <h4>В данном протоколе используются следующие параметры:</h4>
                    {params.paramSet.length > 0 && params.paramSet.map((param, index) => 
                        <div className='format-modal__param'>
                            <div className='format-modal__param__name'>
                                <p>{param.name}</p>
                                <div style={{position: "relative", height: "22px"}} onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(-1)}>
                                    <Icon type={hover === index ? "question-hover": "question"} width="20" heigth="20" />
                                    {hover === index && <Description param={param} className="format-modal__param__description" />}
                                </div>
                            </div>
                            <span>Значение по умолчанию: {param.variable} = {param.value}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FormatModal;