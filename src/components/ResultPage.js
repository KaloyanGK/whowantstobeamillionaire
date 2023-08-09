import React from "react";
import { Link } from "react-router-dom";
import './ResultPage.css'
const ResultPage = (props) => {
    let correctAnswers = props.correctAnswersCounter;
    console.log(correctAnswers)
    if (correctAnswers != 0) {
        setTimeout(() => {
            let current = document.getElementById(`${correctAnswers}`);
            console.log(current);
            current.classList.add('active')

        }, 100)
    }


    const refresh = () => window.replace("http://localhost:3000/")
    return <>
        <div className='result-page-wrapper'>
            <div className='result-page-container'>
                <div className='result-page-content'>
                    {
                        correctAnswers == 15
                            ? <h2>CONGRATULATIONS YOU WON 100,000lv.</h2>
                            : <h2>End of the game. Answered questions : {correctAnswers}</h2>
                    }
                    <div className="prices-table-wrapper">
                        <ul className="prices">
                            <li className="price white" id="15">15: 100000</li>
                            <li className="price" id="14">14: 50000</li>
                            <li className="price" id="13">13: 30000</li>
                            <li className="price" id="12">12: 20000</li>
                            <li className="price" id="11">11: 10000</li>
                            <li className="price white" id="10">10: 5000</li>
                            <li className="price" id="9">9: 3000</li>
                            <li className="price" id="8">8: 2000</li>
                            <li className="price" id="7">7: 1500</li>
                            <li className="price" id="6">6: 1000</li>
                            <li className="price white" id="5">5: 500</li>
                            <li className="price" id="4">4: 400</li>
                            <li className="price" id="3">3: 300</li>
                            <li className="price" id="2">2: 200</li>
                            <li className="price" id="1">1: 100</li>
                        </ul>
                    </div>
                    <Link className="play-again-btn" to={'/'} onClick={refresh}>Play again</Link>

                </div>
            </div>
        </div>
    </>
}
export default ResultPage;