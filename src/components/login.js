import React from "react";
import "./login.css";


function Login() {
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
            <button type='submit'>Login</button>
        </div>
    </form>
</div>
}

export default Login