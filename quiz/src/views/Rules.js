import React from 'react';
import '../styling/rules.css';
import { useHistory } from 'react-router';
import {logout,} from '../Firebase/Firebase.js';

function Rules(){
    const history = useHistory();


    return(
        <div className="box">
             <button onClick={() => history.replace("/start")} className="button-back"> Back </button>
             <button className="button-back" onClick={() => logout()}> Log out  </button>
            <h2 className="headingRules"> Rules: </h2>
            <p className="numberPink">  Choose the number of questions </p> 
            <p className="numberPurple"> Choose your difficulty </p>
            <p className="numberYellow"> Start test and the timer will start </p>
            <p className="numberPink2"> Read the question and the alternetives, choose the one you think is right </p>
            <p className="numberPurple2"> If your answer is right you'll get a point </p>
            <p className="numberYellow2"> When quiz is done, your poins are counted and your score are put in the toplist </p>
            <h3> Good luck! </h3>
        </div>
    )
}

export default Rules;