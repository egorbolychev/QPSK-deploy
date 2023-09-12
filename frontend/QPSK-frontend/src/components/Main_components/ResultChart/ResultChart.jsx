import React, { useState } from "react";
import "./ResultChart.pcss"
import { Button, Link } from "/src/components/ui";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "/src/store/stepSlice"
import Chart from "./Chart/Chart.jsx";
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
import jsPDF from "jspdf";

const mockData = [
    {
      x: 0,
      y: 200,
    },
    {
      x: 10,
      y: 160,
    },
    {
      x: 20,
      y: 135,
    },
    {
      x: 30,
      y: 130,
    },
    {
      x: 40,
      y: 105,
    },
    {
      x: 50,
      y: 70,
    },
    {
      x: 60,
      y: 60,
    },
    {
      x: 70,
      y: 30,
    },
    {
      x: 80,
      y: 20,
    },
    {
      x: 90,
      y: 19,
    },
    {
      x: 100,
      y: 17,
    },

  ];

const ResultChart = () => {
    const dispatch = useDispatch()
    const params = useSelector(state => state.params)
    const [data, setData] = useState(mockData)
      
    const downloadCSV = () => {
      
        let csvRows = [];
        csvRows.push(`${params.selectedParam.label}, KeyRate`);

        const values = data.map(item => `${item.x}, ${item.y}`)
        csvRows.push(...values)
        const csvData = csvRows.join('\n')
        const blob = new Blob([csvData], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.setAttribute('href', url)
        a.setAttribute('download',`key-rate_${params.selectedParam.label}.csv`);
        a.click()
    }

    const downloadPng = async () => {
        const canvas = await html2canvas(document.getElementById("node-to-download"));
        const dataURL = canvas.toDataURL('image/png');
        downloadjs(dataURL, `key-rate_${params.selectedParam.label}.png`, 'image/png');
    }

    const downloadPdf = async () => {
        const canvas = await html2canvas(document.getElementById("node-to-download"));
        const dataURL = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(dataURL, 'JPEG', 0, 0);
        pdf.save(`key-rate_${params.selectedParam.label}.pdf`);

    }

    return (
        <div className="result-chart-container">
            <div className="result-chart-container__data">
                <div className="result-chart-container__data__grid">
                    <div className="result-chart-container__data__grid__left">
                        <div>
                            <h2>Зависимость скорости генерации квантового ключа от параметра</h2>
                            <h2>{params.selectedParam.label}</h2>
                            <Link text="Что это означает?" theme="white"/>
                        </div>
                        <div>
                            <Button onClick={downloadPng} className="result-chart-container__data__button"  text="Скачать файл.png" theme="yellow"/>
                            <Button onClick={downloadCSV} className="result-chart-container__data__button"  text="Скачать файл.csv" theme="yellow"/>
                            <Button onClick={downloadPdf} className="result-chart-container__data__button"  text="Скачать файл.pdf" theme="yellow"/>
                            <Button onClick={() => dispatch(setStep({step: 1}))} className="result-chart-container__data__button" text="Начать заново" icon="circle-arr" theme="white"/>
                        </div>
                    </div>

                    <div id="node-to-download" className="result-chart-container__data__chart-area">
                        <Chart data={data}/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ResultChart;