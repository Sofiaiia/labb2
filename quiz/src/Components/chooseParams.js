import React,{useState,useEffect} from "react";
import axios from "axios";
import '../styling/params.css';
import {useDispatch} from 'react-redux';
import {numOfQuestions,setName,} from '../store/resultSlice';
import { useHistory } from 'react-router';
import {logout,} from '../Firebase/Firebase.js';

function ChooseParams(props){

    const [categories, setCategories] = useState([]);
    const [choises,setChoises] = useState({number: 10, difficulty:"easy", category:"", name:""});
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(()=>{
        axios.get("http://localhost:8080/categories")
             .then((response)=>{
                 setCategories(response.data);
                });
    },[]);

    const handleChange = (event) => {
        setChoises({...choises,[event.target.name]:event.target.value});
        
    }

    const submit = (event) => {
        event.preventDefault();
        props.setLoading(false);
        props.setParams(choises); 
        dispatch(numOfQuestions(choises.number));
        dispatch(setName(choises.name));
        props.handleStart();
    }

    return(
        <div>
            <button onClick={() => history.replace("/start")} className="button-back"> Back </button>
            <button className="button-back" onClick={() => logout()}> Log out  </button>
            <h2 className="header"> Make your choises for the game: </h2>
            <form onSubmit={submit}>
                <label className="name"> Number of questions: </label>
                <select value={choises.number} onChange={handleChange} className="dropDown" name="number"> 
                   <option value="10"> 10 </option> 
                   <option value="15"> 15 </option>
                   <option value="20"> 20 </option>
                   <option value="25"> 25 </option>
                   <option value="30"> 30 </option>
                   <option value="35"> 35 </option>
                </select>
                <br/>
                <label className="name"> Difficulty level: </label>
                <select value={choises.difficulty} onChange={handleChange} className="dropDown" name="difficulty">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <br/>
                <label className="name"> Select your category: </label>
                <select className="dropDown" onChange={handleChange} name="category"> 
                    {categories.map((cat) =>{
                        return(
                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                        )
                    })}
                </select>
                <br/>
                <label className="name"> Your name: </label>
                <input type="text" value={choises.name} name="name" className="input" onChange={handleChange}/> 
                <br/>
                <button type="submit" value="START" className="button"> START </button>
            </form>
        </div>
    )
}
export default ChooseParams;