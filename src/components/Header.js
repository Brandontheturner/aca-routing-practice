import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const navStyle = {
  display: "flex",
  // textAlign: "center"
  justifyContent: "center",
  margin: "30px"
};

const Header = () => (
  <div className="header" style={navStyle}>
    <ul>
      <Link to="/">Landing</Link>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
    </ul>
  </div>
);

export default Header;
