import React from "react";

function ChooseParams(props){

    const changeNumber = () => {}
    const changeDifficulty = () => {}

    const submit = () => {}

    //eventuellt sätta in val av kategori- hittaa nån lösning isf
    return(
        <div>
            <h2> Make your choises: </h2>
            <form>
                <select value="" onChange=""> 
                   <option selected value="10"> 10 </option> 
                   <option value="15"> 15 </option>
                   <option value="20"> 20 </option>
                   <option value="25"> 25 </option>
                   <option value="30"> 30 </option>
                   <option value="35"> 35 </option>
                   <option value="40"> 40 </option>
                   <option value="45"> 45 </option>
                </select>
                <select value="" onChange="">
                    <option selected value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </form>
        </div>
    )
}
export default ChooseParams;