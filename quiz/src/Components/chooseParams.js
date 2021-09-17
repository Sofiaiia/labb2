import React,{useState,useEffect} from "react";
import axios from "axios";

function ChooseParams(props){

    const [categories, setCategories] = useState([]);
    
    //actions för att ända antal frågor coh namn 

    //hämta kategorier- nått fel med länken 
    useEffect(()=>{
        axios.get("http://localhost:8080/categories")
             .then((response)=>{
                 setCategories(response.data);
                 console.log(response.data);
                });
    },[]);

    const changeNumber = () => {
        //set state via props 
    }
    const changeDifficulty = () => {
        //set state via props
    }

    const submit = () => {
        //set states och anropa fetch funktionen
        props.setLoading(false);
    }
    /* 
        <label> Your name: </label>
                <input type="text"> </input>

                <input type="submit"> START </input>
    */

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
                <br/>
                <label> Difficulty level: </label>
                <select value="" onChange={changeDifficulty}>
                    <option selected value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <br/>
                <label> Select your category: </label>
                <select> 
                    {categories.map((cat) =>{
                        return(
                            <option key={cat.id}>{cat.name}</option>
                        )
                    })}
                </select>
                <br/>
                <label> Your name: </label>
                <input type="text" value={props.params.name} name={props.params.value}/> 
                <br/>
                <input type="submit" value="START"/>
            </form>
        </div>
    )
}
export default ChooseParams;