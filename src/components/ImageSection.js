import React from "react";
import "./ImageSection.css";

function ImageSection({product}) {
//     const [imageSrc, setImageSrc] = useState("");
//   function isImage(url) {
//     return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
//   }
//   function imageChanger(e) {
//     return setImageSrc(e.target.getAttribute("src"));
//   }
  return (
    <div className="product__imageDiv">
      <img
        src="https://imgcdn.shortlyst.com/?u=https://static.shortlyst.com/assets/campaigns/bigbasket_64.png"
        alt="productImage"
      />
      {/* <div className="product__imageDiv_images">
        {product[0].images.length !== 0 &&
          product[0].images.map((item) => {
            return (
              isImage(item) && (
                <img src={item} alt="productImages" onClick={imageChanger} />
              )
            );
          })}
      </div> */}
    </div>
  );
}

export default ImageSection;
