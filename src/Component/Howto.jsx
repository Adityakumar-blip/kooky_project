import React from "react";
import "./Howto.css";
import shampoo from "./Assets/webpage2-1.jpg";
import shampooMob from "./Assets/webpage2-2.jpg";
import img1 from "./Assets/waterlesshampoo.png";
import img2 from "./Assets/crackpng.png";
import img3 from "./Assets/skincare.png";

const Howto = () => {
  return (
    <>
      <div className="how-main-cont">
        <div className="how-heading">
          <h1>How to Use Waterless Shampoo?</h1>
        </div>
        <div className="image-cont">
          <img src={img1} alt="" />
        </div>
        <div className="how-text">
          <h3>Just three simple steps: </h3>
          <p className="steps">
            1. Shake the bottle well before use <br/>
            2. Spray on hair and scalp, and massage them gently.<br/>
            3. Let it set it for a few seconds.<br/>
            4. Comb your hair thoroughly.
          </p>
        </div>
      </div>
    </>
  );
};

export default Howto;
