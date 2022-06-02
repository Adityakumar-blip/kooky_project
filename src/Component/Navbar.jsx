import React, {useState} from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
   <section style={{position:'sticky' ,top:'0',zIndex:'101'}}>
    <div  className='nav-wrapper container-fluid nav-bg  '>
            <div className='row'>
        <nav className=" navbar nav-container navbar-expand-lg navbar-light nav-cont  ">
            <div className="container-fluid logo-cont">
                <Link className="navbar-brand" to="/">
                <h3>Kooky</h3>
                </Link>
                    <button className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    onClick={() => setShow(!show)}>
                        <span className="toggler-icon top-bar"></span>
                        <span className="toggler-icon middle-bar"></span>
                        <span className="toggler-icon bottom-bar"></span>
                    </button>
                <div className={`collapse navbar-collapse ${show ? "show" : ""}`} 
                id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 menu"/>
                        <li className="nav-item">
                        <Link className="nav-link active-link " 
                        aria-current="page" 
                        to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link " to="/product">Product</Link>
                        </li>


                        <li className="nav-item">
                        <Link className="nav-link " to="/howto">How To's</Link>
                        </li>

                        
                        <li className="nav-item">
                        <Link className="nav-link " to="/track" >Track Your Order</Link>
                        </li>

                        <li className="nav-item">
                            <Link className='nav-link' to='/stock'>Investors</Link>
                        
                        </li>

                        <li className="nav-item">
                            <Link className='nav-link' to='/about'>About</Link>
                        
                        </li>
                </div>
            </div>
        </nav>

            </div>
        </div>
        </section>
</>
  );
};

export default Navbar;
