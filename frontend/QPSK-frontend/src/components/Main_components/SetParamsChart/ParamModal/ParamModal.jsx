import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './ParamModal.pcss'
import { setActiveTab } from '/src/store/modalSlice'
import classNames from 'classnames';
import { Button } from "/src/components/ui"
import Grid from '/src/components/shared/Grid/Grid.jsx';

const ParamModal = ({ activeTab }) => {
    const dispatch = useDispatch()
    const modal = useSelector(state => state.modal)

    return(
        <div className={classNames({'param-modal active': modal.activeTab === activeTab,
                                    'param-modal': modal.activeTab !== activeTab,})} onClick={() => dispatch(setActiveTab({value: ''}))}>
            <div className={classNames({'param-modal-content active': modal.activeTab === activeTab,
                                    'param-modal-content': modal.activeTab !== activeTab,})} onClick={e => e.stopPropagation()}>
                <div className='modal-back-btn'>
                    <Button text="Вернуться" icon="arr-circle-left" onClick={() => dispatch(setActiveTab({value: ''}))}/>
                </div>
                <h4>Задайте параметры расчёта</h4>
                <Grid className="grid-margin" />

            </div>
        </div>
    );
};

export default ParamModal;