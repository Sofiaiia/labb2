import React, { useEffect, useState } from 'react';
import Game from './Game';
import Rules from './Rules';
import Toplist from './Toplist';
import '../styling/start.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth,logout,} from '../Firebase/Firebase.js';
import { useHistory } from 'react-router';

function Start(){

    const [user,loading,error] = useAuthState(auth);
    const history = useHistory();

    const [game,setGame] = useState(false);
    const [rules,setRules] = useState(false);
    const [toplist,setToplist] = useState(false);    
    
    useEffect(()=>{

        if(loading) return;
        if(!user) return history.replace("/"); 

        setGame(false);
        setRules(false);
        setToplist(false);
    },[user,loading]);

    return(
        <div>
            {game
            ?(<Game> </Game>)
            :(rules
                ?(<Rules> </Rules>)
                :(toplist
                    ?(<Toplist> </Toplist>)
                    :(
                    <div>
                        <button className="choise" onClick={() => setGame(true)}> PLAY GAME </button>
                        <br/>
                        <button className="choise" onClick={() => setRules(true)}> RULES </button>
                        <br/>
                        <button className="choise" onClick={() => setToplist(true)}> TOPLIST </button>
                        <br/>
                        <button className="logout" onClick={() => logout()}> LOG OUT </button>
                    </div>
                    )))
            }
        </div>
    );
}

export default Start;