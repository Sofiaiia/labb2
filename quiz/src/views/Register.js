import {auth,registerUser,} from '../Firebase/Firebase.js';
import {useAuthState} from 'react-firebase-hooks/auth'; 
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import '../styling/login.css';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import '../styling/login.css';

function Register(){

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
                    <h2 className="sign-in-header"> REGISTER: </h2>
                    <div className="input-box">
                        <EmailIcon style={{ position:'absolute',paddingLeft:'5px', paddingTop:'10px', paddingBottom:'10px'}}/>
                        <input placeholder={"E-mail"} className="input-field" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <br/>
                    <div className="input-box">
                        <LockIcon style={{ position:'absolute',paddingLeft:'5px',paddingTop:'10px', paddingBottom:'10px'}}/>
                        <input placeholder="Password" className="input-field" type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <br/>
                    <button onClick={() => registerUser(email,password)} className="login-button"> Register user </button> 
                    <br/>
                </div>
                <br/>
                <button onClick={() => history.replace("/")} className="register-button2"> Have an accout? Log in! </button>
            </div>
        </div>
    );
}
export default Register;