import React from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
import {Link} from 'react-router-dom'

const Navbar = () => {
   
  return (
   
    <>
    <nav>
    <input type="checkbox" id="check"/>
    <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
    </label>
  <label class="logo"><Link to="/"> KOOKY</Link></label>
  <ul>
    <li><a class="active" href="#"><Link to="/product">Product</Link></a></li>
    <li><a href="#"><Link to="/howto">How to</Link></a></li>
    <li><a href="#"><Link to="/track">Track</Link></a></li>
    <li><a href="#"><Link to="/stock">Investor</Link></a></li>
    <li><a href="#"><Link to="/about">About</Link></a></li>
  </ul>
</nav>

</>
  );
};

export default Navbar;
