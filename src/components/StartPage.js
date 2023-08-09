import React from 'react'
import './StartPage.css'
import { Link } from 'react-router-dom'

const StartPage = (props) => {
    let data = props.questions;

    let difficulties = [];
    let categories = [];
    for (let element of data) {
        difficulties.push(element.difficulty)
        categories.push(element.category)
    }

    // get only the unique difficulties - start
    function onlyUnique(value, index, array) {
        return array.indexOf(value) === index;
    }
    let uniqueDifficulties = difficulties.filter(onlyUnique);
    // get only the unique difficulties - end





    return <>
        <div className='start-page-wrapper'>
            <div className='start-page-content-wrapper'>
               
                <Link to={'/game'}>Start Game</Link>
                <div className='content-wrapper'>
                    <h2>Category</h2>
                    <select className='category select'>
                        {categories.map((el, index) => <option key={index}>{el}</option>)}
                    </select>
                </div>
                <div className='content-wrapper'>
                    <h2>Difficulty</h2>
                    <select className='difficulty select'>
                        {uniqueDifficulties.map((el, index) => <option key={index}>{el}</option>)}
                    </select>
                </div>

            </div>
        </div>
    </>
}

export default StartPage;