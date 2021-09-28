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
        if(user) history.replace("/start");
    },[user,loading]);

    return(
        <div>
            <form onSubmit={() => signInEmail(email,password)}>
                <label> Email: </label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br/>
                <label> Password: </label>
                <input  type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br/>
                <button type="submit"> Login </button> 
            </form>
            <button onClick={signInGoogle}>Login with Google </button>
            <br/>
            <button> New user? Register here! </button>
        </div>
    );
}

export default Login;