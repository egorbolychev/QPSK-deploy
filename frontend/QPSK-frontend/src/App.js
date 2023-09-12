import './App.css';
import React from 'react';
import MainCalc from './components/Main_components/MainCalc/MainCalc.jsx'
import Header from './components/shared/Header/Header.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
        <Header />
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainCalc />}/>
                </Routes>
            </BrowserRouter>
        </div>
    </div>
);
}

export default App;
