import React, { useState } from 'react';
import '../styling/game.css';
import {useSelector, useDispatch} from 'react-redux';
import { selectPoints,incrementPoint,numOfQuestions,setName,setTime,} from '../store/resultSlice';
import Alert from 'react-bootstrap/Alert';

function QuestionsComp(props){

    const [currentQuestion,setCurrent] = useState(0);  
    const [params, setParams] = useState({number: 10, difficulty:"easy"});
    const [show, setShow] = useState(false);
    
    const dispatch = useDispatch();

    //Rätta frågan när man trckt på en knapp
    const checkAnswer = (answer,correct) =>{
        setCurrent(currentQuestion +1);
        console.log(correct);
        //kolla med id eller nått om d e rätt svar
        if(answer === correct){
            dispatch(incrementPoint());
            //visa alert, de e rätt 
            setShow(true);
            <Alert variant="success" show={show}>
                <Alert.Heading> RIGHT ANSWER </Alert.Heading>
                <p> </p>
            </Alert>
        }
        else{
            //alert, det är fel
            <Alert variant="danger">
                <Alert.Heading> WRONG ANSWER </Alert.Heading>
                <p> </p>
            </Alert>
        } 
    }
    return(
        <div>
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
                  </div>  : "" ) 
        })}
        </div>
    )
}

export default QuestionsComp;