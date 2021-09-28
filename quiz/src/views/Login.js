import {auth,db,signInGoogle,signInEmail,} from '../Firebase/Firebase.js';
import {useAuthState} from 'react-firebase-hooks/auth'; 
import { useState } from 'react';

function Login(){

    const [email,setEmail] = useState("");
    const [password, setPassword] = useState(""); 
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