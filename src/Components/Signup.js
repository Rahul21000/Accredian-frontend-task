import React, { useState } from "react";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();
  const [inputField, setInputField] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [error, setError] = useState({});
  // const [submiting, setSubmiting] = useState(false);
  const [result, setResult] = useState("");

  const handleonchange = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  const validateFunction = () => {
    const newError = {};
    if (
      typeof inputField.username === "string" ||
      typeof inputField.username === "object"
    ) {
      setError((newError.username = "username not valid"));
    } else if (
      inputField.username.toString().length < 6 ||
      inputField.password.toString().length < 6
    ) {
      newError.username = "username & password not less than 6";
    } else if (inputField.password !== inputField.cpassword) {
      newError.username = "password should be same";
    }
    // else if(inputField.email!==inputField.email){
    //   newError.email="password should be same" ;
    // }
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (validateFunction()) {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "content-type": "appliacation/json" },
        body: JSON.stringify(inputField),
      });
      setResult(response);
      // navigate("/signin")
    }
  };

  return (
    <div className="signup-div">
      <div className="sign-txt">Signup form</div>
      <span className="success">{result}</span>
      <form onSubmit={handlesubmit}>
        Username {<span className="error-msg">{result}</span>}
        <input
          type="text"
          name="username"
          value={inputField.username}
          onChange={handleonchange}
        />
        Email {<span className="error-msg">{result}</span>}
        <input
          type="email"
          name="email"
          value={inputField.email}
          onChange={handleonchange}
        />{" "}
        Password
        <input
          type="text"
          name="password"
          value={inputField.password}
          onChange={handleonchange}
          placeholder="max length 10"
        />{" "}
        Conform Password {<span className="error-msg">{result}</span>}
        <input
          type="text"
          name="cpassword"
          value={inputField.cpassword}
          onChange={handleonchange}
        />{" "}
        <div className="button-div">
          <button type="reset">Reset</button>
          <button type="submit">Signup</button>
        </div>
      </form>
    </div>
  );
}
export default Signup;
