import {auth,signInGoogle,signInEmail,} from '../Firebase/Firebase.js';
import {useAuthState} from 'react-firebase-hooks/auth'; 
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import '../styling/login.css';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

function Login(){

    const [email,setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [user,loading] = useAuthState(auth);
    const history = useHistory();

    useEffect(()=>{
        if(loading) return; 
        if(user) history.replace("/start");
    },[user,loading]);

    
    return(
        <div>
            <div className="sign-in-container">
                <div>
                    <h2 className="sign-in-header"> SIGN IN: </h2>
                    <div className="input-box">
                        <EmailIcon style={{ position:'absolute',paddingLeft:'5px', paddingTop:'10px', paddingBottom:'10px'}}/>
                        <input placeholder={"E-mail"} className="input-field" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <br/>
                    <div className="input-box">
                        <LockIcon style={{ position:'absolute',paddingLeft:'5px',paddingTop:'10px', paddingBottom:'10px'}}/>
                        <input placeholder="Password" className="input-field" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <br/>
                    <button onClick={() => signInEmail(email,password)} className="login-button"> Login </button> 
                    <br/>
                </div>
                <button onClick={signInGoogle} className="google-button">
                        <div className="icons8-google"></div>
                        Login with Google 
                </button>
                <br/>
                <button className="register-button" onClick={() => history.replace("/register")}> New user? Register here! </button>

            </div>
        </div>
    );
}

export default Login;