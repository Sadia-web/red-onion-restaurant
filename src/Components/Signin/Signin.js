import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png';

const Signin = () => {
    return (
        <div className="signup">
            <img src={logo} alt=""/>
            <br/>
            <br/>
            <h3>Sign in</h3>
            <form className="">
                <input type="email" name="" placeholder="Email" required/>
                <input type="password" name="" placeholder="Password" required/>
                <input type="submit" name="" value="Sign In"/>
                <p>New User?<Link to="/signup">Create Account here</Link> </p>
            </form>
            
        </div>
    );
};

export default Signin;