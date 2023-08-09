import React, { useState } from 'react'
import './PlayPage.css'
import volumeIcon from '../images/volume.png'
import { useNavigate } from 'react-router-dom';
import Countdown from 'react-countdown';



const publicImg = require('../images/askpublic.webp');
const publicXImg = require('../images/askpublicX.webp');
const fiftyfiftyImg = require('../images/fiftyfifty.webp')
const fiftyfiftyXImg = require('../images/fiftyfiftyX.webp')
const callfriendImg = require('../images/callafriend.webp')
const callfriendXImg = require('../images/callafriendX.webp')

const images = {
    'public': [publicImg, publicXImg],
    'fiftyfifty': [fiftyfiftyImg, fiftyfiftyXImg],
    'callafriend': [callfriendImg, callfriendXImg]
}

const PlayPage = (props) => {
    const [phoneJokerCounter, setPhoneJokerCounter] = useState(0);
    const [publicJokerCounter, setPublicJokerCounter] = useState(0);
    const [fiftyJokerCounter, setfiftyJokerCounter] = useState(0);

    const [joker, getJoker] = useState(false);
    const [activeQuestion, setActiveQuestion] = useState(0)

    const navigate = useNavigate();


    const usePublicJoker = () => {
        getJoker(true)
        setPublicJokerCounter((index) => index + 1)
    }
    const useFriendJoker = () => {
        getJoker(true)
        setPhoneJokerCounter((index) => index + 1)
    }
    let calculateCounter = props.setCorrectAnswers;
    let correntAnswers = props.correctAnswersCounter;
    if (correntAnswers == 15) {
        navigate('/result');
        return;
    }
    let data = props.questions;
    let question = data[activeQuestion].question;
    let correctAnswer = data[activeQuestion].correct_answer;
    let wrongAnswers = data[activeQuestion].incorrect_answers;
    let allAnswersShuffled = [...wrongAnswers, correctAnswer].sort((a, b) => 0.5 - Math.random());


    console.log('correctAnswer', correctAnswer)
    console.log('wrongAnswers', wrongAnswers)

    const fiftyFiftyJoker = () => {
        setfiftyJokerCounter((index) => index + 1)
        console.log('wrongAnswers', wrongAnswers)
        let firstWrong = wrongAnswers[0];
        let secondWrong = wrongAnswers[2];
        console.log('firstWrong', firstWrong)
        console.log('secondWrong', secondWrong)
        let allAnswears = document.querySelectorAll('.game-page-answer')
        for (let i = 0; i < allAnswears.length; i++) {
            let currentAnswer = allAnswears[i].getAttribute('answer');
            console.log(allAnswears[i]);
            console.log(currentAnswer);
            // if (el.textContent === firstWrong) {
            //     console.log('el1', el);
            //     console.log('el.textContent1', el.textContent)
            //     el.style.background = 'gray';
            //     el.style.color = 'gray';
            // } else if (el.textContent === secondWrong) {
            //     console.log('el2', el);
            //     console.log('el.textContent2', el.textContent)
            //     el.style.background = 'gray';
            //     el.style.color = 'gray';
            // }
        }
    }

    const getValue = (event) => {

        let choosenAnswer = event.target.textContent;
        if (choosenAnswer === correctAnswer) {
            document.querySelector('.joker-answer').textContent = '';
            event.target.style.background = 'green'

            setTimeout(() => {
                let allAnswears = document.querySelectorAll('.game-page-answer')
                for (let el of allAnswears) {
                    el.style.background = '#755dd9';
                    el.style.color = 'white';
                }
                setActiveQuestion((index) => index + 1);
                event.target.style.background = '';
                calculateCounter((index) => index + 1);
            }, 1000);

        } else {
            document.querySelector('.joker-answer').textContent = '';
            event.target.style.background = 'red'
            setTimeout(() => {
                event.target.style.background = ''
            }, 1000);
            navigate('/result')

        }
    }







    return <>
        <div className='game-page-wrapper'>
            <div className='game-page-container'>
                <div className='game-page-content'>
                    <div className='game-page-content-jokers'>
                        <div className='content-soundicon-wrapper'>
                            <img src={volumeIcon} alt='sound-icon' />
                        </div>
                        <div className='content-jokers-wrapper'>
                            <div className='joker-wrapper' onClick={usePublicJoker}>
                                <img src={images['public'][publicJokerCounter]} alt="" />
                            </div>
                            <div className='joker-wrapper' onClick={fiftyFiftyJoker}>
                                <img src={images['fiftyfifty'][fiftyJokerCounter]} alt="" />
                            </div>
                            <div className='joker-wrapper' onClick={useFriendJoker}>
                                <img src={images['callafriend'][phoneJokerCounter]} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="game-page-content-timer">
                        <Countdown className='counter' date={Date.now() + 60000} />

                    </div>

                    <div className='game-page-question-content-wrapper'>
                        <div className='game-page-question-wrapper'>
                            <h3 className='game-page-question'> {question} </h3>
                        </div>

                        <div className='game-page-answers'>
                            {allAnswersShuffled.map((el, index) => <div className='game-page-answer' onClick={getValue} answer={el} key={index}>{el}</div>)}

                        </div>
                    </div>
                    <div className='joker-answer'>
                        {joker === false
                            ? ""
                            : <p className='answer'>Смятам, че отговорът е : {correctAnswer}</p>
                        }

                    </div>
                </div>
            </div>


        </div>

    </>
}
export default PlayPage;