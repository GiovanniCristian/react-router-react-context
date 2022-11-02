import React, { useContext } from "react";
import "./login.css";
import {useNavigate} from "react-router-dom";
import { UserContext } from "../contexts/user";

function Login() {
    let navigate      = useNavigate();
    const userContext = useContext( UserContext );

    const routeChange = () =>{ 
        // let path = `navbar`; 
        
        userContext.toggleIsLoggedIn();

        // Navighiamo di default verso la home
        navigate( '/' );
    }

return (
<div className="auth-form-container">
    <form className="auth-form"> 
        <div className="form-group">
            <label>Username</label>
            <input className="form-control" type='text'/>
        </div>
        <div className="form-group">
            <label>Password</label>
            <input className="form-control" type='password'/>
        </div>
        <div>
            <button type="button" onClick={routeChange}>Login</button>
        </div>
    </form>
</div>
 )
}

export default Login