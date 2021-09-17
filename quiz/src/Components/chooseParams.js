import React,{useState,useEffect} from "react";
import axios from "axios";
import '../styling/params.css';

function ChooseParams(props){

    const [categories, setCategories] = useState([]);
    const [choises,setChoises] = useState({number: 10, difficulty:"easy", category:"", name:""});
    
    //actions för att ända antal frågor coh namn 

    //hämta kategorier- nått fel med länken 
    useEffect(()=>{
        axios.get("http://localhost:8080/categories")
             .then((response)=>{
                 setCategories(response.data);
                 console.log(response.data);
                });
    },[]);

    const handleChange = (event) => {
        setChoises({...choises,[event.target.name]:event.target.value});
        
    }

    const submit = () => {
        //set states och anropa fetch funktionen
        props.setLoading(false);
        console.log(choises.number);
        console.log(choises.difficulty);
        console.log(choises.name);
    }

    return(
        <div>
            <h2> Make your choises for the game: </h2>
            <form onSubmit={submit}>
                <label className="name"> Number of questions: </label>
                <select value={choises.number} onChange={handleChange} className="dropDown" name="number"> 
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
                <label className="name"> Difficulty level: </label>
                <select value="" onChange={handleChange} className="dropDown" name="difficulty">
                    <option selected value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <br/>
                <label className="name"> Select your category: </label>
                <select className="dropDown"> 
                    {categories.map((cat) =>{
                        return(
                            <option key={cat.id}>{cat.name}</option>
                        )
                    })}
                </select>
                <br/>
                <label className="name"> Your name: </label>
                <input type="text" value={choises.name} name="name" className="input" onChange={handleChange}/> 
                <br/>
                <input type="submit" value="START" className="button"/>
            </form>
        </div>
    )
}
export default ChooseParams;