import React, { useState } from "react";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
function Signin() {
  const navigate=useNavigate()
  const [input, setInput] = useState({ username: "", password: "" });
  const handleonchange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  // const handlefetch = async () => {
  //   if (
  //     input.username !== undefined ||
  //     input.username !== null ||
  //     input.username !== ""
  //   ) {
  //     if (
  //       input.username.toString().length !== 6 ||
  //       input.password.toString().length !== 6
  //     ) {
  //       return "username & password not less than 6";
  //     }

  //     const response = await fetch("http://localhost:5000/api/auth/signin", {
  //       method: "POST",
  //       headers: { "content-type": "appliacation/json" },
  //       body: JSON.stringify(input),
  //     });
  //     if (!response) {
  //       return "user couldnt signup";
  //     }
  //     return "registration successfull";
  //   }
  //   return "please enter valid field";
  // };
  // const result = "";
  const handlesubmit = async(e) => {
    console.log("hello");
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/signin", {
      method: "POST",
      headers: { "content-type": "appliacation/json" },
      body: JSON.stringify(input),
    });
    if (!response) {
      return "user couldnt login";
    }
    navigate("/signup");
    return "registration successfull";
  };


  return (
    <div className="signup-div">
     <div className="login-text">Login</div>
      <form onSubmit={handlesubmit}>
        Username
        <input
          type="text"
          name="username"
          value={input.username}
          onChange={handleonchange}
        />
        Password
        <input
          type="text"
          name="password"
          value={input.password}
          onChange={handleonchange}
          maxLength={10}
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
