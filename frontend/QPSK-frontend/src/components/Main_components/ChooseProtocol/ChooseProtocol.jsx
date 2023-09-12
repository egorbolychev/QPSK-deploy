import './ChooseProtocol.pcss';
import React, { useLayoutEffect, useState } from 'react';
import { Button, TextArea } from '/src/components/ui';
import FAQ from '/src/components/shared/FAQ/FAQ.jsx';
import { useDispatch } from 'react-redux';
import { setStep, setProtocol } from "/src/store/stepSlice"
import axios from "axios"
import { API_SERVER } from '/src/Variables';

const faqMoc = [
  {
    text: "Что такое протокол?",
    id: 1
  },
  {
    text: "В чем заключается суть протокола BB84?",
    id: 2
  },
  {
    text: "В чем заключается суть протокола DMCV?",
    id: 3
  },
  {
    text: "В чем заключается суть протокола DMCV КРКБЧ?",
    id: 4
  },
]

const ChooseProtocol = () => {
  const dispatch = useDispatch()
  const [protocols, setProtocols] = useState([])

  const refreshProtocols = () => {
    let url = API_SERVER + '/api/protocol/'
    axios.get(url
      ).then(data => {
        setProtocols(data.data)
      })
  }

  useLayoutEffect(() => {
    refreshProtocols()
  }, [])

  const handleChoose = (id) => {
    dispatch(setStep({step: 2}))
    dispatch(setProtocol({protocol: id}))
  }

  return (
    <div>
      <div className='page1-header'>
          <h1>Выберите протокол, который вы хотите использовать</h1>
          <Button text="Справочник" icon="notebook" />
      </div>

      <div>
        {protocols.length > 0 && protocols.map(item =>
          <TextArea
            onClick={() => handleChoose(item.id)}
            key={item.name}
            className="protocol-block"
            header={item.name}
            text={item.description}
          />
        )}
      </div>

      <div className='protocol-footer'>
          <div className='new-protocol-moc'>
            <div style={{textAlign: 'center'}}>
              <h5>Загрузить свой пресет</h5>
              <p>Coming soon</p>
            </div>
          </div>
          <FAQ items={faqMoc}/>
      </div>
    </div>
);
}

export default ChooseProtocol;
