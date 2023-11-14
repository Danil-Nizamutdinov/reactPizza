import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import iconMenu from "../../../img/icon-menu.svg";
import iconCross from "../../../img/icon-cross.svg";
import iconPhone from "../../../img/icon-phone.svg";
import ContainerModalBasket from "../ModalBasket/ContainerModalBasket";

function BurgerMenu() {
  const basket = useSelector((state) => state.basketReducer.basket);

  const [isMenu, setIsMenu] = useState(false);
  const [isBasket, setIsBasket] = useState(false);

  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };
  const toggleBasket = () => {
    setIsBasket(!isBasket);
  };

  return (
    <div>
      <img
        src={iconMenu}
        alt="menu"
        className="icon_menu"
        onClick={toggleMenu}
      />
      <div className={`menu ${isMenu ? "menu_active" : ""}`}>
        <div className="menu_header">
          <span>Logo</span>
          <img
            src={iconCross}
            alt="cross"
            className="icon_cross"
            onClick={toggleMenu}
          />
        </div>
        <nav className="nav" onClick={toggleMenu}>
          <NavLink to="/" className="nav_bar_link">
            Пицца
          </NavLink>
          <NavLink to="drinks" className="nav_bar_link">
            Напитки
          </NavLink>
          <NavLink to="snacks" className="nav_bar_link">
            Закуски
          </NavLink>
          <NavLink to="desserts" className="nav_bar_link">
            Десерты
          </NavLink>
        </nav>
        <div className="menu_footer">
          <a href="">
            <img src={iconPhone} alt="phone" className="icon_phone" />
            <span>8 800 202-22-60</span>
          </a>
        </div>
      </div>
      <div className="header_basket">
        {basket.length === 0 ? (
          <button onClick={toggleBasket}>Корзина</button>
        ) : (
          <button onClick={toggleBasket}>Корзина | {basket.length}</button>
        )}
      </div>
      <ContainerModalBasket isBasket={isBasket} toggleBasket={toggleBasket} />
    </div>
  );
}

export default BurgerMenu;
