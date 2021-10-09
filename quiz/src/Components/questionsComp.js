import React, { useEffect, useState } from 'react';
import '../styling/game.css';
import {useSelector, useDispatch} from 'react-redux';
import { selectPoints,incrementPoint,} from '../store/resultSlice';
import { Alert } from '@material-ui/lab';
import { Collapse } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import useSound from 'use-sound';
import right from '../sounds/right.wav';
import wrong from '../sounds/wrong.wav';

function QuestionsComp(props){
  
    const [show1, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [random,setRandom] = useState((Math.floor(Math.random()* 3)));
    
    const dispatch = useDispatch();
    const totalPoints = useSelector(selectPoints);

    const [playRight] = useSound(right,{volume:0.5});
    const [playWrong] = useSound(wrong,{volume:0.5});

    const checkAnswer = (answer,correct) =>{
        setRandom((Math.floor(Math.random()* 3)));
        props.setCurrent(props.currentQuestion +1);
        if(answer === correct){
            setShow(true);
            dispatch(incrementPoint());
            playRight();
        }
        else{
            setShow2(true);
            playWrong();
        } 
    }
    useEffect(()=>{
        focus();
    },[]);
    const focus = () => {
        document.getElementById("focusBox").focus();
    }

    return(
        <div>
            {props.questions.map((fraga,index)=> {
              return(
                  index === props.currentQuestion ?
                  <div key={fraga.question}> 
                  <div className="container">
                        <p className="header1"> Points: </p>
                        <p className="content1"> {totalPoints}</p>
                        <p className="header2"> Category: </p>
                        <p className="content2">{fraga.category}</p>
                        <p className="header3"> Time:</p>
                        <p className="content3">{props.formatTime()}</p>
                    </div>
                    <h2 className="questionHeading"> Question: {props.currentQuestion +1 } </h2>

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
                    <p className="questionBox" id="focusBox">{fraga.question}</p> 
                    <div className="">
                    {fraga.incorrect_answers.map((answer,index) => {
                            return(
                                <div>
                                { index === random
                                    ?(  <div>
                                            <button key={fraga.correct_answer} onClick={() =>checkAnswer(fraga.correct_answer,fraga.correct_answer)} className="answerButton">{fraga.correct_answer}</button>
                                            <button key={answer} onClick={() => checkAnswer(answer,fraga.correct_answer)} className="answerButton">{answer}</button>                                      
                                        </div>
                                    )
                                    :(
                                        <div key={answer}>
                                            <button key={answer} onClick={() => checkAnswer(answer,fraga.correct_answer)} className="answerButton">{answer}</button>
                                        </div>
                                    )}
                                </div>
                            )
                     })}
                    </div>
                  </div>  : "" 
                  ) 
        })}
        </div>
    )
}

export default QuestionsComp;