import React, { useEffect, useState } from 'react';

function Game(){

    //Ska dessa va i reduxstoren kanske?
    const [questions,setQuestions] = useState([]);
    const [currentQuestion,setCurrent] =useState({});

    //Hämta frågor från API med async/await 
    const fetchData = async() =>{
        try{
             const response = await fetch('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple');
             const json = await response.json();
             console.log(json);
             setQuestions(json);
        }catch(error){
            console.log("error",error);
        }
       
    }

    //Hämta frågorna när vyn öppnas
    useEffect(()=>{
        fetchData();
    },[]);

    //RENDERING
    return(
        <div>
          GAME
        </div>
    )
}

export default Game;