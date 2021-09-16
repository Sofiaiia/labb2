import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import { selectPoints,selectName,selectQuestions,selectTime} from '../store/resultSlice';

 function ShowResult(){

    //sätt in nån bild från: https://pixabay.com/images/search/trophy/ 

    const totalPoints = useSelector(selectPoints);
    const name = useSelector(selectName);
    const numOfQuestions = useSelector(selectQuestions);

    //const time = useSelector = useSelector(selectTime);
    //<p> Your time: {time}</p>
    
    return(
        <div>
            <h2> QUIZ COMPLETED </h2>

            <p> Total number of questions: {numOfQuestions} </p>
            <p> Totalt points: {totalPoints} </p>
            <p> That means you have {totalPoints/numOfQuestions}% right </p>
            
            <h4> GOOD JOB {name} - you can now find your result in the toplist! </h4>
        </div>
    )
 }

 export default ShowResult;