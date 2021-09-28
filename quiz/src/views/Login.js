import {auth,signInGoogle,signInEmail,} from '../Firebase/Firebase.js';
import {useAuthState} from 'react-firebase-hooks/auth'; 
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import '../styling/login.css';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import { InputAdornment } from '@material-ui/core';
//import GoogleIcon from '@material-ui/icons/Google';

function Login(){

    const [email,setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [user,loading, error] = useAuthState(auth);
    const history = useHistory();

    useEffect(()=>{
        if(user) history.replace("/start");
    },[user,loading]);

    return(
        <div>
            <div className="sign-in-container">
                <form onSubmit={() => signInEmail(email,password)}>
                    <h2 className="sign-in-header"> SIGN IN: </h2>
                    <div className="input-box">
                        <EmailIcon style={{ position:'absolute',paddingLeft:'5px', paddingTop:'10px', paddingBottom:'10px'}}/>
                        <input placeholder={"E-mail"} className="input-field" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <br/>
                    <div className="input-box">
                        <LockIcon style={{ position:'absolute',paddingLeft:'5px',paddingTop:'10px', paddingBottom:'10px'}}/>
                        <input placeholder="Password" className="input-field" type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <br/>
                    <button type="submit" className="login-button"> Login </button> 
                    <br/>
                    <button onClick={signInGoogle} className="google-button">Login with Google </button>
                    <br/>
                    <button> New user? Register here! </button>
                </form>
            </div>
        </div>
    );
}

export default Login;