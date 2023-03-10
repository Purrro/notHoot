import React from "react";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/userServices";
import "./LogInPage.scss";

const LogInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // perform form validation and login logic here
    const res = await postLogin(email, password);

    if (res) {
      console.log(res);
      // navigate("../game");
    }
  };
  

  return (
    <div>
      <div className="container">
        <div className="register-box">
          <div className="box-header">
            <h2>Login</h2>
          </div>
          <div className="inputfield">
            <label>E-mail </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="inputfield">
            <label>Password </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div>
            <button onClick={handleSubmit}>Register</button>
          </div>
          <div>
            <h6>Don't have an account? Register here!</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
