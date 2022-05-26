import React from 'react'
import './Footer.css'
import {FaYoutube} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {AiFillAmazonCircle} from 'react-icons/ai'
import {SiFlipkart} from 'react-icons/si'

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
         <p>PRODUCT</p>
         <p>HOW TO'S</p>
          </div>
        </div>
        <div className="footer-col-third col-lg-3 col-md-6 col-sm-12">
        <div className="footer-col-cont">
        <p>ABOUT</p>
        <p>TRACK YOUR ORDER</p>
          </div>
        </div>
        <div className="footer-col-fourth col-lg-3 col-md-6 col-sm-12">
        <div className="footer-col-cont">
          <p>INVESTOR RELATION</p>
          <p>ALSO AVAILABLE ON</p>
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