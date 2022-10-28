import React, { useState, useRef } from "react";
import "./ImageSection.css";
import {IoIosArrowBack,IoIosArrowForward} from "react-icons/io"

function ImageSection({ product }) {
  const scrollRef = useRef();
  const [imageSrc, setImageSrc] = useState(product[0].images[0]);
  function scroll(scrollOffset) {
    scrollRef.current.scrollLeft += scrollOffset;
  }
  function isImage(url) {
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
  }
  function imageChanger(e) {
    return setImageSrc(e.target.getAttribute("src"));
  }

  return (
    <div className="product__imageDiv">
      {isImage(imageSrc) ? (
        <img src={imageSrc} alt="productImage" />
      ) : (
        <video
          src={imageSrc}
          width="440px"
          height="440px"
          onClick={imageChanger}
          style={{ cursor: "pointer" }}
          controls
        />
      )}
      <div className="product__imageDiv_images">
        <button onClick={() => scroll(-82)}><IoIosArrowBack/></button>
        <div ref={scrollRef}>
          {product[0].images.length !== 0 &&
            product[0].images.map((item, index) => {
              return isImage(item) ? (
                <img
                  key={index}
                  src={item}
                  alt="productImages"
                  onClick={imageChanger}
                  onMouseOver={imageChanger}
                />
              ) : (
                <video
                  key={index}
                  src={item}
                  width="80px"
                  height="80px"
                  onClick={imageChanger}
                  onMouseOver={imageChanger}
                  style={{ cursor: "pointer", opacity: ".7" }}
                />
              );
            })}
        </div>
        <button onClick={() => scroll(82)}  ><IoIosArrowForward/></button>
      </div>
    </div>
  );
}

export default ImageSection;
