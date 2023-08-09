import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import StartPage from './components/StartPage';
import PlayPage from './components/PlayPage';
import { fetchData } from './services/fetch-data'
import ResultPage from './components/ResultPage';
function App() {

  const [correctAnswersCounter, setCorrectAnswers] = useState(0)


  let [questions, setQuestions] = useState([])
  useEffect(() => {
    fetchData().then(data => {
      setQuestions(data['results'])
    })
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<StartPage questions={questions}  />} />
        <Route questions={questions} path='/game' element={<PlayPage questions={questions} setCorrectAnswers={setCorrectAnswers} correctAnswersCounter={correctAnswersCounter} />} />
        <Route path='/result' element={<ResultPage correctAnswersCounter={correctAnswersCounter} />} />
      </Routes>
    </div>
  );
}

export default App;
