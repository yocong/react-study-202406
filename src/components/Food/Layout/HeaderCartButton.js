import React, { useContext, useEffect, useState } from "react";
import CartIcon from "./CartIcon";
import styles from "./HeaderCartButton.module.scss";
import CartContext from "../../store/cart-context";

const HeaderCartButton = ({ onShow }) => {

  
  
  // bump 애니메이션을 제어하는 상태변수
  const [isBump, setIsBump] = useState(false);
  
  // 장바구니 배열 가져오기 (cartItems)
  const { totalSelect, cartItems } = useContext(CartContext);

  const numberOfCart = cartItems.reduce((accum, current) => accum + current.amount, 0);

  const {button, icon, badge, bump } = styles;

  // 담기 버튼을 누를 때 마다 장바구니 버튼 애니메이션 활성화
  useEffect(() => {
    if (cartItems.length === 0) return;

    // console.log('useEffect 실행');
    setIsBump(true);

    // 애니메이션 실행 후 클래스 제거
    setTimeout(() => {
      setIsBump(false);
    }, 300);
  },[cartItems]);

  return (
    <button className={`${button} ${isBump ? bump : undefined}`} onClick={onShow}>
      <span className={icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={badge}>{numberOfCart}</span>
    </button>
  );
};

export default HeaderCartButton;
