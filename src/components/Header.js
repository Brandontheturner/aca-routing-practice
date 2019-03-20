import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const navStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around"
};

const Header = () => (
  <div className="header">
    <ul style={navStyle}>
      <Link to="/">Landing</Link>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/world">World</Link>
      <Link to="/status">Status</Link>
    </ul>
  </div>
);

export default Header;
