import React from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
import {Link} from 'react-router-dom'

const Navbar = () => {
   
  return (
    <div className="nav-cont responsive">
      <div className="nav-left">
        <div className="hamburger" ><GiHamburgerMenu /></div>
        <div className="account"><MdAccountCircle /></div>
      </div>
      <h1>
        <a href="" style={{ textDecoration: "none", color: "white" }}>
        <Link to="/"> KOOKY</Link>
        </a>
      </h1>
      <div className="nav-right">
        <ul>
          <li>
            <a href=""><Link to="/product">Product</Link></a>
          </li>
          <li>
            <a href=""><Link to="/howto">How to</Link></a>
          </li>
          <li>
            <a href=""><Link to="/track">Track</Link></a>
          </li>
          <li>
            <a href=""><Link to="/stock">Investor</Link></a>
          </li>
          <li>
            <a href=""><Link to="/about">About</Link></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
