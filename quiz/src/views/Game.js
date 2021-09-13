import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styling/game.css';
import {useSelector, useDispatch} from 'react-redux';
import { selectPoints,incrementPoint,numOfQuestions,setName,setTime,} from '../store/resultSlice';
import questions from '../Components/questions';

function Game(){

    const [questions,setQuestions] = useState([]);
    const [currentQuestion,setCurrent] =useState(0); 
    const [loading,setLoading] = useState(true);

    const dispatch = useDispatch();
    //hämta ut variabler från 
    const totalPoints = useSelector(selectPoints);
    //actions consts för att kunna ändra i slicern

    //Hämta frågorna när vyn öppnas med axios
    useEffect(()=>{
        axios.get("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple")
             .then((response)=>{
                 setQuestions(response.data.results);
                 console.log(response.data.results);
                });
        setLoading(false);
        setCurrent(0);
    },[]);

    //Rätta frågan när man trckt på en knapp
    const checkAnswer = (answer,correct) =>{
        setCurrent(currentQuestion +1);
        console.log(correct);
        //kolla med id eller nått om d e rätt svar
        if(answer === correct){
            dispatch(incrementPoint());
            //visa alert, de e rätt 
        }
        else{
            //alert, det är fel
        } 
    }

    //Låter användaren välja params

    //Räkna ihop gamet och visa resultat för användaren- sätt in i topplista
    //kunna ange sitt namn vid denna 
    const endGame = () => {}

    //RENDERING
    return(
        <div>
          <h2 className="questionHeading">Question {currentQuestion + 1}</h2>
          <p>Points: {totalPoints}</p>
          {loading ? (<p>Loading...</p>)
          :(
              <questions questions={questions}> </questions>
          )}
        </div>
    )
}

export default Game;