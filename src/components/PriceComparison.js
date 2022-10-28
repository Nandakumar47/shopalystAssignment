import React from "react";
import "./PriceComparison.css";

function PriceComparison({ merchant, offerPrice, salePrice, link }) {
  // console.log(merchant,offerPrice,salePrice)
  return (
    <div className="PriceComparison__card" data-aos="fade-up">
      <img src={link} alt="" />
      <div>
        <h3>{merchant.toUpperCase()}</h3>
        <p>Sale Price :{salePrice}</p>
        <p>Offer Price :{offerPrice}</p>
      </div>
    </div>
  );
}

export default PriceComparison;
