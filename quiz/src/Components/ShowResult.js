import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import { selectPoints,selectName,selectQuestions,selectTime} from '../store/resultSlice';

 function ShowResult(){

    //sätt in nån bild från: https://pixabay.com/images/search/trophy/ 

    const totalPoints = useSelector(selectPoints);
    const name = useSelector(selectName);
    const numOfQuestions = useSelector(selectQuestions);
    const time = useSelector = useSelector(selectTime);

    return(
        <div>
            <h2> QUIZ COMPLETED </h2>

            <p> Total number of questions: {numOfQuestions} </p>
            <p> Totalt points: {totalPoints} </p>
            <p> That means you have XX% right </p>
            <p> Your time: {time}</p>
            <h3> <strong> GOOD JOB {name}</strong> - you can now find your result in the toplist! </h3>
        </div>
    )
 }

 export default ShowResult;