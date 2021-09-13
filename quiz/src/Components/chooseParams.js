import React from "react";

function ChooseParams(props){

    const changeNumber = () => {
        //set state via props 
    }
    const changeDifficulty = () => {
        //set state via props
    }

    const submit = () => {
        //set states och anropa fetch funktionen
    }

    //eventuellt sätta in val av kategori- hittaa nån lösning isf
    //kanske kunna välja typ också- multiple/TF
    return(
        <div>
            <h2> Make your choises for the game: </h2>
            <form onSubmit={submit}>
                <label> Number of questions: </label>
                <select value="" onChange={changeNumber}> 
                   <option selected value="10"> 10 </option> 
                   <option value="15"> 15 </option>
                   <option value="20"> 20 </option>
                   <option value="25"> 25 </option>
                   <option value="30"> 30 </option>
                   <option value="35"> 35 </option>
                   <option value="40"> 40 </option>
                   <option value="45"> 45 </option>
                </select>
                <label> Difficulty level: </label>
                <select value="" onChange={changeDifficulty}>
                    <option selected value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <input type="submit"> START </input>
            </form>
        </div>
    )
}
export default ChooseParams;