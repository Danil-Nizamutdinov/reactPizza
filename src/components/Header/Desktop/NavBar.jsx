import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ContainerModalBasket from "../ModalBasket/ContainerModalBasket";

function NavBar() {
  const basket = useSelector((state) => state.basketReducer.basket);
  const [isBasket, setIsBasket] = useState(false);
  const toggleBasket = () => {
    setIsBasket(!isBasket);
  };

  return (
    <div className="nav_bar">
      <nav className="nav">
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

export default NavBar;
