import React, { useEffect, useState } from 'react';

function Game(){

    //Ska dessa va i reduxstoren kanske?
    const [questions,setQuestions] = useState([]);
    const [currentQuestion,setCurrent] =useState(2);
    //const [answerdQuestions, setAnswered] = useState(0); 
    const [loading,setLoading] = useState(true);

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
        setLoading(false);
    },[]);

    //loop som skriver ut en fråga i gången och väntar på ett svar
    //kanske innan en timer är slut 
    const gameLoop = () => {
        setCurrent(0);
        while(currentQuestion < 10){
            setCurrent(currentQuestion +1);
            questions.map((fraga,index)=> {
                return(
                    index === currentQuestion 
                    ? <p key={fraga.question}>{fraga.question}</p> 
                    : "" ) 
          })
        }
    }

    //Låter användaren välja params

    //RENDERING
    return(
        <div>
          GAME
          {loading ? (<p>Loading...</p>)
          :(questions.map((fraga,index)=> {
              return(
                  index === currentQuestion ?
              <p key={fraga.question}>{fraga.question}</p> : "" ) 
        }))}
        </div>
    )
}

export default Game;