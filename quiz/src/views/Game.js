import React, { useEffect, useState } from 'react';

function Game(){

    //Ska dessa va i reduxstoren kanske?
    const [questions,setQuestions] = useState([]);
    const [currentQuestion,setCurrent] =useState({});
    const [answerdQuestions, setAnswered] = useState(0); 

    //Hämta frågor från API med async/await 
    const fetchData = async() =>{
        try{
             const response = await fetch('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple');
             const json = await response.json();
             console.log(json.results);
             setQuestions(json.results);
        }catch(error){
            console.log("error",error);
        }
    }

    //Hämta frågorna när vyn öppnas
    useEffect(()=>{
        fetchData();
    },[]);

    const showQusetion = () => {
        return (
            <>
             
            </>
        );
    }

    //RENDERING
    return(
        <div>
          GAME
          {questions.map(({question})=>(
              <p key={question}>{question.category}</p>
          ))}
        </div>
    )
}

export default Game;