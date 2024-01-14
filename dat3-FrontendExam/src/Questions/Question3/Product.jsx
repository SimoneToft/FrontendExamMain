import React from "react";

function Product(props) {
  const { productName, productText, productPrice, productImage } = props;

  return (
        <li className="product-list_product-item">
            <div className={`product-card`}>
                <div className="product-card_image">
                    <img src={productImage} alt="fish"></img>
                </div>
                <div className="product-card_info">
                    <h2 className="product-card_info_title">{productName}</h2>
                    <p className="product-card_info_description">{productText}</p>
                    <p className="product-card_info_price">{productPrice}</p>
                </div>
            </div>
        </li>

  );
}

export default Product;