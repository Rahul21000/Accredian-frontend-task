import React, { useState } from "react";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate=useNavigate();
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });
  console.log(input);
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
  //       return "user couldnt login";
  //     }
  //     navigate("/signin");
  //     return "registration successfull";
  //   }
  //   return "please enter valid field";
  // };
  // let result = "";
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
      <div className="sign-txt">Signup form</div>
      <div className=""></div>
      <form onSubmit={handlesubmit}>
        Username <span></span>
        <input
          type="text"
          name="username"
          value={input.username}
          onChange={handleonchange}
        />
        Email <span></span>
        <input
          type="email"
          name="email"
          value={input.email}
          onChange={handleonchange}
        />{" "}
        Password <span></span>
        <input
          type="text"
          name="password"
          value={input.password}
          onChange={handleonchange}
          placeholder="max length 10"
        />{" "}
        Conform Password
        <input
          type="text"
          name="cpassword"
          value={input.cpassword}
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
