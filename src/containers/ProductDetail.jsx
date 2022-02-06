import React from "react";
import '../styles/ProductDetail.scss';

import close from '@icons/icon_close.png';
import addCart from '@icons/bt_add_to_cart.svg';

const ProductDetail = () => {
  return (
    <aside className="product-detail">
      <div className="back-image">
        <img src={close} alt="close" />
      </div>
      <img
        src="https://images.pexels.com/photos/9604597/pexels-photo-9604597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="flower-pot"
      />
      <div className="points">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="product-infoPD">
        <p>$ 120,00</p>
        <p>Flower-Pot</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et porro vel
          blanditiis mollitia? Veniam quaerat impedit vero voluptatem
          consectetur modi exercitationem quia facere ab atque?
        </p>
        <button className="primary-buttonPD add-to-cart">
          <img src={addCart} alt="add-to-cart" />
          Add to cart
        </button>
      </div>
    </aside>
  );
};

export default ProductDetail;
