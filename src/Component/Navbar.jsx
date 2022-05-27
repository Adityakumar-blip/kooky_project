import React from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
   
  return (
    <div className="nav-cont responsive">
      <div className="nav-left">
        <div className="hamburger" ><GiHamburgerMenu /></div>
        <div className="account"><MdAccountCircle /></div>
      </div>
      <h1>
        {" "}
        <a href="" style={{ textDecoration: "none", color: "white" }}>
          KOOKY
        </a>
      </h1>
      <div className="nav-right">
        <ul>
          <li>
            {" "}
            <a href=""> Home</a>
          </li>
          <li>
            {" "}
            <a href="">Product</a>{" "}
          </li>
          <li>
            {" "}
            <a href="">How to use?</a>{" "}
          </li>
          <li>
            {" "}
            <a href="">Track your order</a>{" "}
          </li>
          <li>
            {" "}
            <a href="">About Us</a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
