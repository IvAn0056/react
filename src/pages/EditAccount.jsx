import React from "react";
import "../styles/EditAccount.scss";
import { useNavigate } from "react-router-dom";

const EditAccount = () => {
  let navigate = useNavigate(); 
  const routeChange = (path) =>{ 
    navigate(path);
  }
  return (
    <div className="principal-containerEA">
        <div className="secundary-containerEA">

            <h1 className="titleEA">My account</h1>

            <form action="/" className="formEA">
                <label for="name" className="labelEA">Name</label>
                <p className="textEA">Camila Yoko</p>

                <label for="email" className="labelEA">Email address</label>
                <p className="textEA">camilayoko@hmail.com</p>

                <label for="password" className="labelEA">Password</label>
                <p className="textEA text-pwdEA">*********</p>
            </form>
            
            <button className="secundary-buttonEA inputEA" onClick={() => routeChange("/save-account")}>Edit</button>

        </div>
    </div>
  );
};

export default EditAccount;
