import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import {logout,getResult,} from '../Firebase/Firebase.js';
import { DataGrid,} from  '@material-ui/data-grid';
import '../styling/toplist.css';


function Toplist(){

    const [resultObjects,setResultObjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const history = useHistory();

    const results = async() => {
        setResultObjects(await getResult());
        setLoading(false);
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
            <div className="grid-container">
            {loading
                    ?( <div> LOADING </div>)
                    :(<DataGrid rows={resultObjects} columns={[
                    {field:"name", headerName:"Name", width:200},
                    {field:"totalPoints", headerName:"Points", width:150},
                    {field:"numOfQuestions", headerName:"Number of Questions", width:250},
                    {field:"time", headerName:"Time", width:150}
                    ]}
                    autoHeight 
                    hideFooterPagination
                    />)
                
                }
            </div>
        </div>
    )
}

export default Toplist;