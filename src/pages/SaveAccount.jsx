import React from 'react';
import '../styles/SaveAccount.scss';
import { useNavigate } from "react-router-dom";

const SaveAccount = () => {
  let navigate = useNavigate(); 
  const routeChange = (path) =>{ 
    navigate(path);
  }
  return (
    <div className="principal-containerSA">
    <div className="secundary-containerSA">

        <h1 className="titleSA">My account</h1>

        <form action="/" className="formSA">
            <label for="name" className="labelSA">Name</label>
            <input type="text" id="name" placeholder="Camila Yoko" className="inputSA input-nameSA"/>

            <label for="email" className="labelSA">Email address</label>
            <input type="email" id="email" placeholder="camilayoko@hmail.com" className="inputSA input-emailSA"/>

            <label for="password" className="labelSA">Password</label>
            <input type="password" id="password" placeholder="*********" className="inputSA input-pwdSA"/> 
        </form>
        
        <button className="primary-buttonSA inputSA" onClick={() => routeChange("/")}>Save</button>

    </div>
</div>
  );
};

export default SaveAccount;
