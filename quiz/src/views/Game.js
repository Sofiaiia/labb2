import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import '../styling/game.css';
import {useSelector} from 'react-redux';
import {selectQuestions,} from '../store/resultSlice';
import QuestionsComp from '../Components/QuestionsComp';
import ChooseParams from '../Components/ChooseParams';
import ShowResult from '../Components/ShowResult';
 import {useDispatch} from 'react-redux';
 import {setTime,} from '../store/resultSlice';

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

    const dispatch = useDispatch();

    const handleStart = () => {
        //Starta klockan 
        setIsActive(true);
        setIsStoped(true);
        countRef.current = setInterval(() => {
            setTimer((timer) => timer+1);
        },1000);
    }

    const handleStop = () => {
        //stanna klockan 
        clearInterval(countRef.current);
        setIsStoped(false);
        //sätt in tiden i storen
        dispatch(setTime(formatTime()));
    }

    const formatTime = () => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

        return `${getHours} : ${getMinutes} : ${getSeconds}`
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
          ?(<ChooseParams params={params} setParams={setParams} setLoading={setLoading} handleStart={handleStart}> </ChooseParams>)
          :(currentQuestion < totalquestions 
          ?( <QuestionsComp questions={questions} currentQuestion={currentQuestion} setCurrent={setCurrent} formatTime={formatTime}> </QuestionsComp>)
          :( <ShowResult handleStop={handleStop}> </ShowResult> ))}
        </div>
    )
}

export default Game;