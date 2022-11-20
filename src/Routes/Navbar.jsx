import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>

      <div className="the1">
        <div className="the">THE</div>
        <div className="siren"><b>SIREN</b></div>
      </div>
       
       <div className="link">
        <Link to="/" style={{ textDecoration: 'none',color:'black'}}>Home</Link>
        <Link to="/Bollywood" style={{ textDecoration: 'none',color:'black'}}>Bollywood</Link>
        <Link to="/Technology" style={{ textDecoration: 'none',color:'black'}}>Technology</Link>
        <Link to="/Hollywood" style={{ textDecoration: 'none',color:'black'}}>Hollywood</Link>
        <Link to="/Fitness" style={{ textDecoration: 'none',color:'black'}}>Fitness</Link>
        <Link to="/Food" style={{ textDecoration: 'none',color:'black'}}>Food</Link>
       </div>

       <hr></hr>
    </div>
  );
}
