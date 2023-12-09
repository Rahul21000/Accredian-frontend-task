import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const user = "username";


function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="logo">Accredian</div>
      <div className="profile-wrapper">
        <div className="notifiation">
          <img src="/Images/Notification.svg" alt="" />
        </div>
        <div className="profile-logo" onClick={() => setOpen(!open)}>
          <img src="/Images/nav-image.svg" alt="" />
          {open && (
            <div className="profile-menu">
              <h3>{user}</h3>
              <hr></hr>
              <div className="profile">Profile</div>
              <div className="setting">Setting</div>
              <div className="about">About</div>
              <div className="logout">
              <Link to={'login'}><img src="Images/logout.png" alt="" /></Link>  
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Navbar;
