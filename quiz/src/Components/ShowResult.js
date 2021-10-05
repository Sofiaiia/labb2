import React, { useEffect } from "react";
import {useSelector} from 'react-redux';
import { selectPoints,selectName,selectQuestions,selectTime} from '../store/resultSlice';
import '../styling/result.css';
import price from '../pictures/price.png';
import { useHistory } from 'react-router';
import {pushResult} from '../Firebase/Firebase.js'



 function ShowResult(props){

    const totalPoints = useSelector(selectPoints);
    const name = useSelector(selectName);
    const numOfQuestions = useSelector(selectQuestions);
    const time = useSelector(selectTime);
    const history = useHistory();

    useEffect(()=>{ 
        const endTime = props.handleStop();
        console.log(endTime);
        pushResult(name,totalPoints,numOfQuestions,endTime);
    },[]);
    
    return(
        <div className="wrap">
            <button onClick={() => history.replace("/start")} className="button-back"> Return to homepage </button>
            <button onClick={() => history.replace("/toplist")} className="button-back"> See toplist </button>
            <br/>
            <img src={price} alt="price" height="200"/>
            <h2 className="resultHeader"> QUIZ COMPLETED </h2>
            <div className="boxResult">
                <p className="text"> Total number of questions: {numOfQuestions} </p>
                <p className="text"> Totalt points: {totalPoints} </p>
                <p className="text"> Your time: {time}</p>
                <p className="text"> That means you have {(totalPoints/numOfQuestions) * 100}% right </p>
            </div>
            <p className="lastHeading"> GOOD JOB {name} - </p>
            <p className="text"> you can now find your result in the toplist! </p>
        </div>
    )
 } 

 export default ShowResult;