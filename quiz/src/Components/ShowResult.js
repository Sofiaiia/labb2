import React from "react";
import {useSelector} from 'react-redux';
import { selectPoints,selectName,selectQuestions,selectTime} from '../store/resultSlice';
import '../styling/result.css';
import price from '../pictures/price.png';

 function ShowResult(){

    //sätt in nån bild från: https://pixabay.com/images/search/trophy/ 

    const totalPoints = useSelector(selectPoints);
    const name = useSelector(selectName);
    const numOfQuestions = useSelector(selectQuestions);

    //const timeee = useSelector = useSelector(selectTime);
    //<p> Your time: {time}</p>
    
    return(
        <div>
            <img src={price} alt="price" height="350"/>
            <h2 className="resultHeader"> QUIZ COMPLETED </h2>
            <div className="boxResult">
                <p> Total number of questions: {numOfQuestions} </p>
                <p> Totalt points: {totalPoints} </p>
                <p> That means you have {(totalPoints/numOfQuestions) * 100}% right </p>
            </div>
            <p className="lastHeading"> GOOD JOB {name} - </p>
            <p> you can now find your result in the toplist! </p>
        </div>
    )
 }

 export default ShowResult;