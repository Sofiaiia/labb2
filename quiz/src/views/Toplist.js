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

    useEffect(()=>{
        results();
    },[]) 
       
    return(
        <div>
            <button onClick={() => history.replace("/start")}  className="button-back"> BACK </button>
            <button className="button-back" onClick={() => logout()}> Log out  </button>
            <br/>
            <div className="grid-container">
            <h2 className="top-header"> Top 10: </h2>
                    <DataGrid rows={resultObjects} columns={[
                    {field:"name", headerName:"Name",flex:0.7,minWidth:200, headerAlign:"center", align:"center",headerClassName:"grid-header-name", cellClassName:"grid-Cell-name"},
                    {field:"totalPoints", headerName:"Points",flex:0.5,minWidth:150,headerAlign:"center", align:"center",headerClassName:"grid-header-points",cellClassName:"grid-Cell-points"},
                    {field:"numOfQuestions", headerName:"Questions",flex:0.7,minWidth:200,headerAlign:"center", align:"center",headerClassName:"grid-header-questions",cellClassName:"grid-Cell-questions"},
                    {field:"time", headerName:"Time",headerAlign:"center",flex:0.5,minWidth:150, align:"center",headerClassName:"grid-header-time",cellClassName:"grid-Cell-time"}
                    ]}
                    autoHeight 
                    hideFooter
                    loading={loading}
                    />
                
            
            </div>
        </div>
    )
}

export default Toplist;