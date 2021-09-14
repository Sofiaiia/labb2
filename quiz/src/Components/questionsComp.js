import React, { useState } from 'react';
import '../styling/game.css';
import {useSelector, useDispatch} from 'react-redux';
import { selectPoints,incrementPoint,numOfQuestions,setName,setTime,} from '../store/resultSlice';
//import Alert from 'react-bootstrap/Alert';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Collapse } from '@material-ui/core';

function QuestionsComp(props){

    const [currentQuestion,setCurrent] = useState(0);  
    const [show1, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    
    const dispatch = useDispatch();
    const totalPoints = useSelector(selectPoints);

    //Rätta frågan när man trckt på en knapp
    const checkAnswer = (answer,correct) =>{
        setCurrent(currentQuestion +1);
        console.log(correct);
        //kolla med id eller nått om d e rätt svar
        if(answer === correct){
            //visa alert, de e rätt 
            setShow(true);
            dispatch(incrementPoint());
            console.log(totalPoints);
        }
        else{
            //alert, det är fel
            setShow2(true);
        } 
    }
    return(
        <div>
            <Collapse in={show1}> 
                <Alert  severity="success" variant="filled" onClose={()=>setShow(false)}>
                    RIGHT ANSWER 
                </Alert>
            </Collapse>
            <Collapse in={show2}>
                <Alert severity="error" variant="filled" onClose={()=>setShow2(false)}>
                     WRONG ANSWER 
                </Alert>
            </Collapse>

            {props.questions.map((fraga,index)=> {
              return(
                  index === currentQuestion ?
                  <div key={fraga.question}> 
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