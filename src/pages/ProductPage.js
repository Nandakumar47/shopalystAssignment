import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductPage.css";
import parse from "html-react-parser";
import PriceComparison from "../components/PriceComparison";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import ImageSection from "../components/ImageSection";
// import NavBar from "../components/NavBar";
const baseUrl =
  "https://api-in-dev.shortlyst.com/shopalyst-service/v1/products/types/EAN?codes=8901030673214";
function ProductPage() {
  const [product, setProduct] = useState([]);

  function percentageCalc(curr, total) {
    return 100 - (curr / total) * 100;
  }
  function merchantLogoFind(item) {
    return product[0].attributeValues.filter((attr) => {
      return attr.value === item.attributes.merchant;
    })[0].logo;
  }
  function findLowest(listOfPrice) {
    return listOfPrice.reduce(
      (acc, current) => {
        if (current.offerPrice < acc.offerPrice) {
          acc = { ...current };
        }
        return { ...acc };
      },
      { ...product[0].skuSet[0] }
    );
  }
  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) => {
        // console.log(response.data.result.productList)
        setProduct(response.data.result.productList);
      })
      .catch(function (error) {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      });
  }, []);
  return (
    <>
    {/* <NavBar/> */}
      {product.length !== 0 && (
        <div className="product">
          <ImageSection product={product} />
          <div className="product__details">
            <div className="category_details">
              <p>Category</p>
              <IoIosArrowDroprightCircle />
              <p>{product[0].category}</p>
            </div>
            <h3>{product[0].title}</h3>
            <div className="product__details_Set1">
              <h1>₹{findLowest(product[0].skuSet).offerPrice}</h1>
              <p>₹{product[0].salePrice}</p>
              <p>
                {percentageCalc(
                  findLowest(product[0].skuSet).offerPrice,
                  product[0].salePrice
                )}
                %off
              </p>
            </div>
            <div className="product__details_Set2">
              <button>Buy now</button>
              <button>Add to cart</button>
              <p>
                Click <span>Add to cart</span> or <span>Buy now</span> to avail
                this offer from{" "}
                <span>{findLowest(product[0].skuSet).attributes.merchant}</span>
              </p>
            </div>
            <div className="product__details_description">
              <h5> Description</h5>
              <p>{parse(product[0].description)}</p>
            </div>
          </div>
          <div className="priceComparison">
            <h3>Price Comparison</h3>
            <div>
              {product[0].skuSet.length !== 0 &&
                product[0].skuSet.map((item) => {
                  return (
                    <PriceComparison
                      key={item.skuId}
                      merchant={item.attributes.merchant}
                      offerPrice={item.offerPrice}
                      salePrice={item.salePrice}
                      link={merchantLogoFind(item)}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductPage;
