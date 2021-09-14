import React, { useState } from 'react';
import '../styling/game.css';
import {useSelector, useDispatch} from 'react-redux';
import { selectPoints,incrementPoint,numOfQuestions,setName,setTime,} from '../store/resultSlice';
import Alert from 'react-bootstrap/Alert';
//import 'bootstrap/dist/css/bootstrap.min.css';

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
            <Alert className="alertRight" show={show1} >
                <Alert.Heading> RIGHT ANSWER </Alert.Heading>
                <p> Right </p>
                <button onClick={()=>setShow(false)}> Next question </button>
            </Alert>

            <Alert className="alertWrong" show={show2}>
                <Alert.Heading> WRONG ANSWER </Alert.Heading>
                <p> </p>
                <button onClick={()=>setShow2(false)}> Next question </button>
            </Alert>

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