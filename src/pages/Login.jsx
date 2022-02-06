import React from 'react';
import '../styles/Login.scss';

import logol from '../assets/Logos/logo_yard_sale.svg';

const Login = () => {
  return (
    <div className="loginL">
        <div className="form-containerL">
            <img src={logol} alt="logo" className="logoL" /> 

            <h1 className="titleL">Create a new password</h1>
            <p className="subtitleL">Enter a new password for your account</p>

            <form action="/" className="formL">
                <label for="password" className="labelL">Password</label>
                <input type="password" id="password" placeholder="*********" className="inputL input-pwdL"/>

                <label for="new-password" className="labelL">Re-enter password</label>
                <input type="password" id="new-password" placeholder="*********" className="inputL input-pwdL"/>

                <input type="submit" value="Confirm new password" className="primary-buttonL login-buttonL"/>
            </form>
        </div>
    </div>
  );
};

export default Login;





