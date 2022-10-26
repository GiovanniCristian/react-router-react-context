import React, { useContext } from "react";
import "./login.css";
import {useNavigate} from "react-router-dom";
import { UserContext } from "../contexts/user";


function Login() {
    let navigate = useNavigate();
    const { toggleIsLoggedIn } = useContext( UserContext );

    const routeChange = () =>{ 
        toggleIsLoggedIn();
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