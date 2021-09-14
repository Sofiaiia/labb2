import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import { selectPoints,selectName,selectQuestions,selectTime} from '../store/resultSlice';

 function ShowResult(){

    const totalPoints = useSelector(selectPoints);
    const name = useSelector(selectName);
    const numOfQuestions = useSelector(selectQuestions);
    const time = useSelector = useSelector(selectTime);

    //plocka ut totala poängen 
    //räkna up % rätt
    return(
        <div>
            <p> Total number of questions: {numOfQuestions} </p>
            <p> Totalt points: {totalPoints} </p>
            <p> Your time: {time}</p>
        </div>
    )
 }

 export default ShowResult;