import React, { useEffect,} from 'react';
import '../styling/start.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth,logout,} from '../Firebase/Firebase.js';
import { useHistory } from 'react-router';

function Start(){

    const [user,loading,error] = useAuthState(auth);
    const history = useHistory();   
    
    useEffect(()=>{

        if(loading) return;
        if(!user) return history.replace("/"); 

    },[user,loading]);

    return(
        <div>
             <div>
                <button className="choise" onClick={() => history.replace("/game")}> PLAY GAME </button>
                <br/>
                <button className="choise" onClick={() => history.replace("/rules")}> RULES </button>
                <br/>
                <button className="choise" onClick={() => history.replace("/toplist")}> TOPLIST </button>
                <br/>
                <button className="choise" onClick={() => logout()}> LOG OUT </button>
             </div>
        </div>
    );
}

export default Start;