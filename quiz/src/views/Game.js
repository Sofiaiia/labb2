import React, { useEffect, useState } from 'react';

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
    }
    //loop som skriver ut en fråga i gången och väntar på ett svar
    //kanske innan en timer är slut 
    const gameLoop = () => {
        setCurrent(0);
        while(currentQuestion < 10){
            questions.map((fraga,index)=> {
                return(
                    index === currentQuestion 
                    ? <div key={fraga.question}> 
                        <p>{fraga.category}</p>
                        <p>{fraga.question}</p> 

                      </div> 
                    : "" ) 
          })
          
        }
    }

    //Låter användaren välja params

    //Räkna ihop gamet och visa resultat för användaren- sätt in i topplista

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