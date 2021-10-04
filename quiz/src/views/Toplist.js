import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import {logout,getResult,} from '../Firebase/Firebase.js';


function Toplist(){

    const [resultObjects,setResultObjects] = useState([]);
    const history = useHistory();

    const results = async() => {
        setResultObjects(await getResult());
    }

    //anropa getResult 
    useEffect(()=>{
        results();
    },[])

    //sätt en en datagrid från material-UI
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