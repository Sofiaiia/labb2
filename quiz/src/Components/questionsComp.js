import React, { useState } from 'react';
import '../styling/game.css';
import {useSelector, useDispatch} from 'react-redux';
import { selectPoints,incrementPoint,numOfQuestions,setName,setTime,} from '../store/resultSlice';
import { Alert } from '@material-ui/lab';
import { Collapse } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

function QuestionsComp(props){
  
    const [show1, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    
    const dispatch = useDispatch();
    const totalPoints = useSelector(selectPoints);

    const checkAnswer = (answer,correct) =>{
        props.setCurrent(props.currentQuestion +1);
        if(answer === correct){
            setShow(true);
            dispatch(incrementPoint());
        }
        else{
            setShow2(true);
        } 
    }
    //Vill jag ha en alert eller nått annat e frågan...
    return(
        <div>
            <Collapse in={show1}> 
                <Alert icon={<CheckIcon fontSize="inherit"/>} severity="success" variant="filled" onClose={()=>setShow(false)}>
                     <strong> RIGHT ANSWER </strong>
                </Alert>
            </Collapse>
            <Collapse in={show2}>
                <Alert icon={<ClearIcon fontSize="inherit"/>} severity="error" variant="filled" onClose={()=>setShow2(false)}>
                     <strong> WRONG ANSWER  </strong>
                </Alert>
            </Collapse>

            {props.questions.map((fraga,index)=> {
              return(
                  index === props.currentQuestion ?
                  <div key={fraga.question}> 
                    <h2 className="questionHeading"> Question: {props.currentQuestion +1 } </h2>
                    <div>
                        <p> Category: </p>
                        <p>{fraga.category}</p>
                    </div>
                    <p className="questionBox">{fraga.question}</p> 
                    <button key={fraga.correct_answer} onClick={() =>checkAnswer(fraga.correct_answer,fraga.correct_answer)} className="answerButton">{fraga.correct_answer}</button>
                    {fraga.incorrect_answers.map((answer)=>{
                        return(
                            <div key={answer}>
                                <button key={answer} onClick={() => checkAnswer(answer,fraga.correct_answer)} className="answerButton">{answer}</button>
                                <br/>
                            </div>
                        )
                    })}
                  </div>  : "" 
                  
                  ) 
        })}
        </div>
    )
}

export default QuestionsComp;