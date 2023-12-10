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
      inputField.username.trim() === "" ||
      typeof inputField.username === "object"
    ) {
      setError((newError.username = "username not valid"));
    } else if (inputField.username.length < 6) {
      newError.username = "username not less than 6";
    } else if (inputField.password !== inputField.cpassword) {
      newError.username = "password not matched!";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputField.email)) {
      newError.email = "valid email required!";
    }
    setError(newError);
    return Object.keys(newError).length === 0;
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
        <pre>
          {" "}
          Username{" "}
          {error.username && (
            <span className="error-msg">{error.username}</span>
          )}
        </pre>
        <input
          type="text"
          name="username"
          value={inputField.username}
          onChange={handleonchange}
          required
        />
        Email {error.email && <span className="error-msg">{error.email}</span>}
        <input
          type="email"
          name="email"
          value={inputField.email}
          onChange={handleonchange}
          required
        />{" "}
        Password
        <input
          type="text"
          name="password"
          value={inputField.password}
          onChange={handleonchange}
          required
        />{" "}
        Conform Password{" "}
        {error.password && <span className="error-msg">{error.password}</span>}
        <input
          type="text"
          name="cpassword"
          value={inputField.cpassword}
          onChange={handleonchange}
          required
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
