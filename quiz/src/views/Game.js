import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import '../styling/game.css';
import {useSelector} from 'react-redux';
import {selectQuestions,} from '../store/resultSlice';
import QuestionsComp from '../Components/QuestionsComp';
import ChooseParams from '../Components/ChooseParams';
import ShowResult from '../Components/ShowResult';

function Game(){

    const [currentQuestion,setCurrent] = useState(0);  
    const [questions,setQuestions] = useState([]);
    const [params, setParams] = useState({number: 10, difficulty:"easy", category:"", name:""});
    const [loading,setLoading] = useState(true);
    const totalquestions = useSelector(selectQuestions);

    const [timer, setTimer] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isStoped, setIsStoped] = useState(false);
    const countRef = useRef(null);

    const handleStart = () => {
        //Starta klockan 
    }

    const handleStop = () => {
        //stanna klockan 
    }
   
    useEffect(()=>{
        axios.get(`https://opentdb.com/api.php?amount=${params.number}&difficulty=${params.difficulty}&category=${params.category}&type=multiple`)
             .then((response)=>{
                 setQuestions(response.data.results);
                 console.log(response.data.results);
                });
    },[params]);

    return(
        <div>
          {loading 
          ?(<ChooseParams params={params} setParams={setParams} setLoading={setLoading}> </ChooseParams>)
          :(currentQuestion < totalquestions 
          ?( <QuestionsComp questions={questions} currentQuestion={currentQuestion} setCurrent={setCurrent}> </QuestionsComp>)
          :( <ShowResult> </ShowResult> ))}
        </div>
    )
}

export default Game;