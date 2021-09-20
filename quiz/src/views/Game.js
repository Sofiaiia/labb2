import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styling/game.css';
import {useSelector, useDispatch} from 'react-redux';
import { selectPoints,incrementPoint,numOfQuestions,setName,setTime,} from '../store/resultSlice';
import QuestionsComp from '../Components/QuestionsComp';
import ChooseParams from '../Components/ChooseParams';
import ShowResult from '../Components/ShowResult';

function Game(){

    const [currentQuestion,setCurrent] = useState(0);  
    const [questions,setQuestions] = useState([]);
    const [params, setParams] = useState({number: 10, difficulty:"easy", category:"", name:""});
    const [loading,setLoading] = useState(true);

    const dispatch = useDispatch();
    const totalPoints = useSelector(selectPoints);
    //actions consts för att kunna ändra i slicern
   
    useEffect(()=>{
        axios.get(`https://opentdb.com/api.php?amount=${params.number}&difficulty=${params.difficulty}&category=${params.category}&type=multiple`)
             .then((response)=>{
                 setQuestions(response.data.results);
                 console.log(response.data.results);
                 //setLoading(false);
                });
    },[params]);

    return(
        <div>
          {loading 
          ?(<ChooseParams params={params} setParams={setParams} setLoading={setLoading}> </ChooseParams>)
          :(currentQuestion < 10 
          ?( <QuestionsComp questions={questions} currentQuestion={currentQuestion} setCurrent={setCurrent}> </QuestionsComp>)
          :( <ShowResult> </ShowResult> ))}
        </div>
    )
}

export default Game;