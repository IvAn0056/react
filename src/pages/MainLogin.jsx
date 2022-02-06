import React, { useRef } from "react";
import "../styles/MainLogin.scss";
import { useNavigate } from "react-router-dom";

import logo from "@logos/logo_yard_sale.svg";

const MainLogin = () => {
  const form = useRef(null);
  let navigate = useNavigate(); 
  const routeChange = (path) =>{ 
    navigate(path);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(data);
  };
  return (
    <div className="loginML">
      <div className="form-containerML">
        <img src={logo} alt="logo" className="logoML" />

        <form action="/home" className="formML" ref={form}>
          <label htmlFor="email" className="labelML">
            Email address
          </label>
          <input
            type="email"
            name="email"
            placeholder="camilayoko@hmail.com"
            className="inputML input-emailML"
          />

          <label htmlFor="password" className="labelML">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className="inputML input-pwdML"
          />

          <button
            className="primary-buttonML login-buttonML"
            onClick={() => {
              handleSubmit;
              routeChange("/home");
            }}
          >
            Log in
          </button>

          <a href="/pwd-recovery" className="forgotPwdML">
            Forgot my password
          </a>
        </form>

        <button className="secundary-buttonML" onClick={() => routeChange("/save-account")}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default MainLogin;
