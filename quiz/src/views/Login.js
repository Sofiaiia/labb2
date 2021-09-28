import {auth,signInGoogle,signInEmail,} from '../Firebase/Firebase.js';
import {useAuthState} from 'react-firebase-hooks/auth'; 
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

function Login(){

    const [email,setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [user,loading, error] = useAuthState(auth);
    const history = useHistory();

    useEffect(()=>{
        if(loading){
            //ifall amn vill ha en loading vy 
            return;
        }
        if(user) history.replace("/start");
    },[user,loading]);

    return(
        <div>
            <form onSubmit={() => signInEmail(email,password)}>
                <label> Email: </label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label> Password: </label>
                <input  type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit"> Login </button> 
            </form>
            <button onClick={signInGoogle}>Login with Google </button>
        </div>
    );
}

export default Login;