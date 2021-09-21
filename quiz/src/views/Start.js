import React, { useEffect, useState } from 'react';
import Game from './Game';
import Rules from './Rules';
import Toplist from './Toplist';

function Start(){

    const [game,setGame] = useState(false);
    const [rules,setRules] = useState(false);
    const [toplist,setToplist] = useState(false);    
    
    useEffect(()=>{
        setGame(false);
        setRules(false);
        setToplist(false);
    },[])

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
                        <button onClick={() => setGame(true)}> PLAY GAME </button>
                        <br/>
                        <button onClick={() => setRules(true)}> RULES </button>
                        <br/>
                        <button onClick={() => setToplist(true)}> TOPLIST </button>
                    </div>
                    )))
            }
        </div>
    );
}

export default Start;