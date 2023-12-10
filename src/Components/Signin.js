import React, { useState } from "react";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
import { Message } from "@mui/icons-material";
function Signin() {
  const navigate = useNavigate();
  const [inputField, setInputField] = useState({ username: "", password: "" });
  const [error, setError] = useState({});
  // const [result, setResult] = useState({});
  const handleonchange = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };
  const validateFunction = () => {
    const newError = {};
    if (
      inputField.username.trim() === ""||
      typeof inputField.username === "object"
    ) {
      newError.username = "valid user required!";
    }
     else if ((inputField.password).length < 6) {
      newError.password = "password too short";
    }
    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (validateFunction()) {
      try{
      const response = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        headers: { "content-type": "appliacation/json" },
        body: JSON.stringify(inputField),
      });
      // const result=await response.data;
      console.log(response);
    }
   
    catch(error){
      console.log(error.message);
    }
      // setResult(response);
      // navigate("/signup");
     
    }
  };

  return (
    <div className="signup-div">
      <div className="success"></div>
      <div className="login-text">Login</div>
      <form onSubmit={handlesubmit}>
        Username
        {error.username &&(<span className="error-msg">{error.username}</span>)}
        <input
          type="text"
          name="username"
          value={inputField.username}
          onChange={handleonchange}
          required
        />
       Password
        {error.password &&(<span className="error-msg">{error.password}</span>)}
        <input
          type="text"
          name="password"
          value={inputField.password}
          onChange={handleonchange}
          required
        />{" "}
        <br />
        <div className="button-div">
          <button type="reset">Reset</button>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
export default Signin;
