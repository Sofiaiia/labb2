import React, { useEffect, useState } from 'react';
import '../styling/game.css'
function Game(){

    //Ska dessa va i reduxstoren kanske?
    const [questions,setQuestions] = useState([]);
    const [currentQuestion,setCurrent] =useState(0); 
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

    //Rätta frågan när man trckt på en knapp
    const checkAnswer = () =>{
        setCurrent(currentQuestion +1);
        //kolla med id eller nått om d e rätt svar
    }

    //Låter användaren välja params

    //Räkna ihop gamet och visa resultat för användaren- sätt in i topplista
    const endGame = () => {}

    //RENDERING
    return(
        <div>
          <h2>Question {currentQuestion + 1}</h2>
          {loading ? (<p>Loading...</p>)
          :(questions.map((fraga,index)=> {
              return(
                  index === currentQuestion ?
                  <div key={fraga.question}> 
                    <p>{fraga.category}</p>
                    <p>{fraga.question}</p> 
                    <button onClick={checkAnswer}>{fraga.correct_answer}</button>
                    {fraga.incorrect_answers.map((answer)=>{
                        return(
                        <button key={answer} onClick={checkAnswer}>{answer}</button>
                        )
                    })}
                  </div>  : "" ) 
        }))}
        </div>
    )
}

export default Game;