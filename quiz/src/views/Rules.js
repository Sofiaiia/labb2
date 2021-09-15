import React from 'react';
import '../styling/rules.css';

function Rules(){
    return(
        <div className="box">
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