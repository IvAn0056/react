import React, {useContext} from "react";
import '../styles/OrderItem.scss';
import close from '@icons/icon_close.png';
import AppContext from "../context/AppContext";

const OrderItem = ({product}) => {
  const { removeFromCart } = useContext(AppContext);

  return (
    <div className="articlesSC">
      <div className="imageSC">
        <img
          src={product.images[0]}
          alt={product.title}
        />
        <p>{product.title}</p>
      </div>
      <div className="cost">
        <p>${product.price}</p>
        <img src={close} alt="close" onClick={ () => removeFromCart(product)}/>
      </div>
    </div>
  );
};

export default OrderItem;
