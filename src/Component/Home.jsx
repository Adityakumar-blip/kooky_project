import React from "react";
import "./Home.css";
import { FaRupeeSign } from "react-icons/fa";
import img1 from "./Assets/waterlesshampoo.png";
import img2 from "./Assets/crackpng.png";
import img3 from "./Assets/skincare.png";
import img4 from "./Assets/webpage11.jpg";
import img5 from "./Assets/webpage2-1.jpg";
import img6 from "./Assets/webpage3-1.jpg";
import img7 from './Assets/slsfree.webp'
import img8 from './Assets/proven.jpg'
import img9 from './Assets/proven.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <div className="home-main-cont">
        <div className="home-triangle"></div>
          <div className="home-triangle-content">
          <h1>CLEAN AND FRESH HAIR, IN JUST A SPRAY</h1>
          <p>
            We believe that everyone deserves effortlessly flawless hairs! Hence
            we've have brought you a formula that solves the purpose instantly!
            All you need now is a bottle of Kooky. This product is made using
            cleansing charcoal and special conditioning quality, which gives you
            perfect hair ever so quick!
          </p>
          <div className="home-triangle-icon">
            <div className="triangle-icon1">
           <img src={img7} alt="" />
           </div>
           <div className="triangle-icon1">
           <img src={img8} alt="" />
           </div>
           <div className="triangle-icon1">
           <img src={img9} alt="" />
           </div>
          </div>
        </div>
        <div className="home-product-row row" style={{ margin: "0" }}>
          <div className="home-product-col-first col-lg-6 col-md-12 col-sm-12">
            <div className="home-product-img-cont">
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="home-product-col-second col-lg-6 col-md-12 col-sm-12">
            <h1 className="home-product-name">KOOKY WATERLESS SHAMPOO</h1>
            <p className="home-product-size">SIZE: 75ML</p>
            <strike>
              <h5 className="home-product-fakeprice">
                <FaRupeeSign />
                199
              </h5>
            </strike>
            <h5 className="home-product-originalsize">
              <FaRupeeSign /> 99 (50% off)
            </h5>
            <button className="home-product-button">Add to Cart</button>
            <br />
            <button className="home-product-button">Buy Now</button>
            <br />
          </div>
        </div>

        <h1 className="home-product-other">OUR OTHER PRODUCTS</h1>
        <div className="home-product-row row" style={{ margin: "0" }}>
          <div className="home-product-col-first col-lg-6 col-md-12 col-sm-12">
            <div className="home-product-img-cont">
              <img src={img2} alt="" />
            </div>
          </div>
          <div className="home-product-col-second col-lg-6 col-md-12 col-sm-12">
            <h1 className="home-product-name">KOOKY CRACK HEEL SPRAY</h1>
            <p className="home-product-size">SIZE: 50ML</p>
            <strike>
              <h5 className="home-product-fakeprice">
                <FaRupeeSign />
                199
              </h5>
            </strike>
            <h5 className="home-product-originalsize">
              <FaRupeeSign /> 99 (50% off)
            </h5>
            <button className="home-product-button">Add to Cart</button>
            <br />
            <button className="home-product-button">Buy Now</button>
            <br />
          </div>
        </div>

        <div className="home-product-row row" style={{ margin: "0" }}>
          <div className="home-product-col-first col-lg-6 col-md-12 col-sm-12">
            <div className="home-product-img-cont">
              <img src={img3} alt="" />
            </div>
          </div>
          <div className="home-product-col-second col-lg-6 col-md-12 col-sm-12">
            <h1 className="home-product-name">KOOKY BODY HYGIENE SPRINKLE</h1>
            <p className="home-product-size">SIZE: 50ML</p>
            <strike>
              <h5 className="home-product-fakeprice">
                <FaRupeeSign />
                199
              </h5>
            </strike>
            <h5 className="home-product-originalsize">
              <FaRupeeSign /> 99 (50% off)
            </h5>
            <button className="home-product-button">Add to Cart</button>
            <br />
            <button className="home-product-button">Buy Now</button>
            <br />
          </div>
        </div>

        <h1 className="home-product-other">WE ALL TOGETHER</h1>
        <div className="home-slider">
          <Slider {...settings}>
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Home;
