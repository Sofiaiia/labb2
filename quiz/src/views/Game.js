import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styling/game.css';
import {useSelector, useDispatch} from 'react-redux';
import { selectPoints,incrementPoint,numOfQuestions,setName,setTime,} from '../store/resultSlice';
import QuestionsComp from '../Components/QuestionsComp';
//import ChooseParams from '../Components/chooseParams';
//import ShowResult from '../Components/ShowResult';

function Game(){

    const [currentQuestion,setCurrent] = useState(0);  
    const [questions,setQuestions] = useState([]);
    //const [loading,setLoading] = useState(true);

    const dispatch = useDispatch();
    const totalPoints = useSelector(selectPoints);
    //actions consts för att kunna ändra i slicern

    useEffect(()=>{
        axios.get("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple")
             .then((response)=>{
                 setQuestions(response.data.results);
                 console.log(response.data.results);
                });
        //återställ storen
    },[]);

    //RENDERING
    return(
        <div>
          {currentQuestion < 10 ? ( <QuestionsComp questions={questions} currentQuestion={currentQuestion} setCurrent={setCurrent}> </QuestionsComp>)
          :( "" )}
        </div>
    )
}

export default Game;