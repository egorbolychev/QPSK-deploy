import React, {useState} from "react";
import "./Articles.pcss"
import { Button } from "/src/components/ui"

const testArticle = {
    id: "",
    name: "Квантовый компьютер",
    text: `Ква́нтовый компью́тёр — вычислительное устройство, которое использует явления квантовой механики (квантовая суперпозиция, квантовая запутанность) для передачи и обработки данных. Квантовый компьютер (в отличие от обычного) оперирует не битами (способными принимать значение либо 0, либо 1), а кубитами, имеющими значения одновременно и 0, и 1. Теоретически это позволяет обрабатывать все возможные состояния одновременно, достигая существенного преимущества (квантового превосходства) над обычными компьютерами в ряде алгоритмов. 
    Полноценный универсальный квантовый компьютер является пока гипотетическим устройством, сама возможность построения которого связана с серьёзным развитием квантовой теории в области многих частиц и сложных экспериментов; разработки в данной области связаны с новейшими открытиями и достижениями современной физики. На начало 2020-х годов практически были реализованы лишь единичные экспериментальные системы, исполняющие фиксированные алгоритмы небольшой сложности.
    Первым практическим высокоуровневым языком программирования для такого вида компьютеров считается язык Quipper (англ.)рус., основанный на Haskell[3]`,
    link: "",
}

const Articles = () => {
    const [article, setArticle] = useState(testArticle)
    const MAX_SYMBOLS_ALLOWED = 300;

    const truncate = (text) => {
        if(text.length >= MAX_SYMBOLS_ALLOWED) {
            const transformed = text.substr(0, MAX_SYMBOLS_ALLOWED - 2);
        
            return `${transformed}...`
          }
    }

    return (
        <div className="calc-articles">
            <div className="calc-articles__head">
                <h2>{article.name}</h2>
                <Button text="Справочник" icon="notebook" />
            </div>

            <div className="calc-articles__grid">
                <div className="calc-articles__grid__left">
                    <p>{truncate(testArticle.text)}</p>
                </div>
                <div className="calc-articles__grid__right">
                    <img src="https://s0.rbk.ru/v6_top_pics/media/img/0/56/756285922633560.jpg"></img>
                </div>
            </div>

            <div className="calc-articles__footer">
                <Button text="Предыдущая статья" icon="arr-left" />
                <Button text="Следующая статья" icon="arr-right" />
            </div>
        </div>
    );
};

export default Articles