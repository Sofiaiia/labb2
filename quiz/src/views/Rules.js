import React from 'react';
import '../styling/rules.css';

function Rules(){
    return(
        <div>
            <h2 className="headingRules"> Rules: </h2>
            <p> Choose the number of questions </p>
            <p> Choose your difficulty </p>
            <p> Start test and the timer will start </p>
            <p> Read the question and the alternetives, choose the one you think is right </p>
            <p> If your answer is right you'll get a point </p>
            <p> When quiz is done, your poins are counted and your score and put in the toplist </p>
            <h3> Good luck! </h3>
        </div>
    )
}

export default Rules;