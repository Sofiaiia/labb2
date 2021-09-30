import React from 'react';
import { useHistory } from 'react-router';
import {logout,} from '../Firebase/Firebase.js';


function Toplist(){

    const history = useHistory();

    return(
        <div>
            <button onClick={() => history.replace("/start")}  className="button-back"> BACK </button>
            <button className="button-back" onClick={() => logout()}> Log out  </button>
            <br/>
            TOPLIST
        </div>
    )
}

export default Toplist;