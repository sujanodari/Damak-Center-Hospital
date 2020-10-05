import React from "react";
import LockIcon from "@material-ui/icons/Lock";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import "./LoginNav.css";


function LoginNav({
  handleClickOpenLogin,
  handleClickOpenRegister,
}) {


  return (
    <div>
      <div className="login__top">
        <div className="login__topLeft">
          <LockIcon fontSize="small" />
          <span onClick={handleClickOpenLogin} className="login__topSpan">
            Login
          </span>
        </div>
        <div className="login_header">
         <h1>Damak Center Hospital</h1> 
        </div>
       
        <div className="login__topRight">
          <PersonAddIcon fontSize="small" />
          <span onClick={handleClickOpenRegister} className="login__topSpan">
            Sign Up
          </span>
        </div>
      </div>
      </div>
  );
}

export default LoginNav;
