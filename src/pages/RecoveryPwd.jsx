import React from 'react';
import '../styles/RecoveryPwd.scss';

import logo from '@logos/logo_yard_sale.svg';
import mail from '@icons/email.svg';
import { useNavigate } from "react-router-dom";

const RecoveryPwd = () => {
  let navigate = useNavigate(); 
  const routeChange = (path) =>{ 
    navigate(path);
  }
  return (
    <div className="principal-containerRP">
      <div className="secundary-containerRP">
        <img
          src={logo}
          alt="logo"
          className="logoRP"
        />
        <h1 className="titleRP">Email has been sent!</h1>
        <p className="subtitleRP">
          Please check your inbox for instructions on how to reset the password
        </p>
        <div className="shadowRP">
          <img
            src={mail}
            alt="mail_image"
            className="mail-imageRP"
          />
        </div>
        <button className="primary-buttonRP inputRP" onClick={() => routeChange("/")} >Log in</button>
        <p className="textRP">
          Didn't receive the email? <a href>Resend</a>
        </p>
      </div>
    </div>
  );
};

export default RecoveryPwd;
