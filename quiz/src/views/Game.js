import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styling/game.css'
import {useSelector, useDispatch} from 'redux';

function Game(){

    const [questions,setQuestions] = useState([]);
    const [currentQuestion,setCurrent] =useState(0); 
    const [loading,setLoading] = useState(true);

    //Hämta frågorna när vyn öppnas med axios
    useEffect(()=>{
        axios.get("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple")
             .then((response)=>{
                 setQuestions(response.data.results);
                 console.log(response.data.results);
                });
        setLoading(false);
    },[]);

    //Rätta frågan när man trckt på en knapp
    const checkAnswer = () =>{
        setCurrent(currentQuestion +1);
        //kolla med id eller nått om d e rätt svar
        //visa en alert till en början om d e rätt/fel 
    }

    //Låter användaren välja params

    //Räkna ihop gamet och visa resultat för användaren- sätt in i topplista
    //kunna ange sitt namn vid denna 
    const endGame = () => {}

    //RENDERING
    return(
        <div>
          <h2 className="questionHeading">Question {currentQuestion + 1}</h2>
          {loading ? (<p>Loading...</p>)
          :(questions.map((fraga,index)=> {
              return(
                  index === currentQuestion ?
                  <div key={fraga.question}> 
                    <div>
                        <p> Category: </p>
                        <p>{fraga.category}</p>
                    </div>
                    <p className="questionBox">{fraga.question}</p> 
                    <button onClick={checkAnswer} className="answerButton">{fraga.correct_answer}</button>
                    {fraga.incorrect_answers.map((answer)=>{
                        return(
                            <div key={answer}>
                                <button  onClick={checkAnswer} className="answerButton">{answer}</button>
                                <br/>
                            </div>
                        )
                    })}
                  </div>  : "" ) 
        }))}
        </div>
    )
}

export default Game;