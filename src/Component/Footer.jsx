import React from 'react'
import './Footer.css'
import {FaYoutube} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {AiFillAmazonCircle} from 'react-icons/ai'
import {SiFlipkart} from 'react-icons/si'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className="footer-main-cont">
      <div className="footer-row row" style={{margin:'0'}}>
        <div className="footer-col-first col-lg-3 col-md-6 col-sm-12">
        <div className="footer-col-text"><h3>Connect with us on</h3></div>
        <div className="footer-icon-collection">
    <FaFacebook/>
    <FaInstagramSquare/>
    <FaYoutube/>
    </div>
        </div>
        <div className="footer-col-second col-lg-3 col-md-6 col-sm-12">
          <div className="footer-col-cont">
         <p><Link to='/product'>PRODUCT</Link></p>
         <p><Link to='/howto'>HOW TO'S</Link></p>
          </div>
        </div>
        <div className="footer-col-third col-lg-3 col-md-6 col-sm-12">
        <div className="footer-col-cont">
        <p><Link to='/about'>ABOUT</Link></p>
        <p><Link to='/track'>TRACK YOUR ORDER</Link></p>
          </div>
        </div>
        <div className="footer-col-fourth col-lg-3 col-md-6 col-sm-12">
        <div className="footer-col-container">
          <p><Link to='/stock'>INVESTOR RELATION</Link></p>
          <p><Link to=''>ALSO AVAILABLE ON</Link></p>
          <div className="footer-icon-collection-last">
          <AiFillAmazonCircle/>
          <SiFlipkart/>
    </div>
          </div>
        </div>
      </div>
  </div>
  </>
  )
}

export default Footer