import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styling/game.css';
import {useSelector, useDispatch} from 'react-redux';
import { selectPoints,incrementPoint,numOfQuestions,setName,setTime,} from '../store/resultSlice';
import questionsComp from '../Components/questionsComp';

function Game(){

    const [questions,setQuestions] = useState([]);
    
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
    },[]);

    

    //Låter användaren välja params

    //Räkna ihop gamet och visa resultat för användaren- sätt in i topplista
    //kunna ange sitt namn vid denna 
    const endGame = () => {}

    //RENDERING
    return(
        <div>
          {loading ? (<p>Loading...</p>)
          :(
              <questionsComp questions={questions}> </questionsComp>
          )}
        </div>
    )
}

export default Game;