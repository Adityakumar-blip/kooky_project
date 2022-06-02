import React from "react";
import "./Product.css";
import { FaRupeeSign } from "react-icons/fa";
import img1 from "./Assets/waterlesshampoo.png";
import img2 from "./Assets/crackpng.png";
import img3 from "./Assets/skincare.png";



const Product = () => {
  return (
    <>
    <section>
      <div className="product">
        <h1>Our Products</h1>
      </div>
    </section>
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
    </>
  );
};

export default Product;
