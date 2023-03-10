import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postRegister } from "../../services/userServices";
import "./Register.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async () => {
    const res = await postRegister(email, password, password2);
    
    if (res && res.data.message === "Success!") {
      navigate("../login");
    }
  };

  return (
    <div>
      <div className="container">
        <div className="register-box">
          <div className="box-header">
            <h2>Register</h2>
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
          <div className="inputfield">
            <label>Confirm Password </label>
            <input
              type="password"
              id="password2"
              value={password2}
              onChange={(e) => {
                setPassword2(e.target.value);
              }}
              onKeyDown= { (e) => {
                if(e.keyCode === 13)
                handleSubmit();
              }}
            />
          </div>
          <button onClick={handleSubmit}>Register</button>
          <div>
            <h6>Already have an account? Login here!</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
