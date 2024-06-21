import React from "react";
import styles from './Header.module.scss';

// 정적 이미지 로딩
import foodImage from '../../../assets/img/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";

const Header = ({ onShowCart }) => {

  // 디스트럭쳐링
  const { header, 'main-image' : mainImage} = styles;

  return (
    <>
      <header className={header}> 
        <h1>ReactMeals</h1>
        <HeaderCartButton onShow={onShowCart} />

      </header>
      <div class={mainImage}>
        <img src={foodImage} alt="" />
      </div>
    </>
  );
};

export default Header;
