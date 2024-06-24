import React, { useContext } from "react";
import CartIcon from "./CartIcon";
import styles from "./HeaderCartButton.module.scss";
import CartContext from "../../store/cart-context";

const HeaderCartButton = ({ onShow }) => {

  const { totalSelect } = useContext(CartContext);

  const {button, icon, badge} = styles;

  return (
    <button className={button} onClick={onShow}>
      <span className={icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={badge}>{totalSelect}</span>
    </button>
  );
};

export default HeaderCartButton;
