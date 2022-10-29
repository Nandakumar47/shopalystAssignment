import React from "react";
import "./PriceComparison.css";
import AOS from "aos";
import "aos/dist/aos.css";
function PriceComparison({ merchant, offerPrice, salePrice, link }) {
  return (
    <div className="PriceComparison__card" data-aos="fade-up">
      <img src={link} alt="logo" />
      <div>
        <h3>{merchant.toUpperCase()}</h3>
        <p>
          <span>Offer Price :</span>
          {offerPrice}
        </p>
        <p>Sale Price :{salePrice}</p>
      </div>
    </div>
  );
}
AOS.init();
export default PriceComparison;
