import React, { useEffect, useState } from 'react';

function Game(){

    const [questions,setQuestions] = useState([]);
    const [currentQuestion,setCurrent] =useState({});

    const fetchData = async() =>{
        try{
             const response = await fetch('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple');
             const json = await response.json();
             console.log(json);
             setQuestions(json);
        }catch(error){
            console.log("eroor",error);
        }
       
    }

    useEffect(()=>{
        fetchData();
    },[]);

    return(
        <div>
          GAME
        </div>
    )
}

export default Game;