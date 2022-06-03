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
            <p>Now clean and smooth hair are just a few sprays away! We present you the magic potion that can smoothen your hair and cleanse your scalp in an instant.</p>
            <p>This product is made using cleansing charcoal and special conditioning quality, which gives you perfect hair ever so quick!</p>
            <strike>
              <h5 className="home-product-fakeprice">
                <FaRupeeSign />
                199
              </h5>
            </strike>
            <h5 className="home-product-originalsize">
              <FaRupeeSign /> 99 (50% off)
            </h5>
            {/* <button className="home-product-button">Add to Cart</button> */}
            <br />
            <a href="https://rzp.io/l/FG2Bf6o5m"><button className="home-product-button">Buy Now</button></a>
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
            <p>Tired of getting your hands dirty while taking care of cracked heels? Say no more! With Kooky Crack Heel Spray, you can easily get smooth heels with ultimate comfort!</p>
            <strike>
              <h5 className="home-product-fakeprice">
                <FaRupeeSign />
                199
              </h5>
            </strike>
            <h5 className="home-product-originalsize">
              <FaRupeeSign /> 99 (50% off)
            </h5>
            {/* <button className="home-product-button">Add to Cart</button> */}
            <br />
            <a href="https://rzp.io/l/FG2Bf6o5m"><button className="home-product-button">Buy Now</button></a>
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
            <p>Summers bring itching and sweaty discomfort with it. To help you sooth and cool off the heat through the summers, Kooky Body Hygiene Spray can always come handy!</p>
            <strike>
              <h5 className="home-product-fakeprice">
                <FaRupeeSign />
                199
              </h5>
            </strike>
            <h5 className="home-product-originalsize">
              <FaRupeeSign /> 99 (50% off)
            </h5>
            {/* <button className="home-product-button">Add to Cart</button> */}
            <br />
            <a href="https://rzp.io/l/FG2Bf6o5m"><button className="home-product-button">Buy Now</button></a>
            <br />
          </div>
        </div>
    </>
  );
};

export default Product;
