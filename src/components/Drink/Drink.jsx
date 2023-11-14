import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDrinks } from "../../redux/other-reducer";
import { setBasket } from "../../redux/basket-reducer";

function Drink() {
  const dispatch = useDispatch();
  const drinks = useSelector((state) => state.otherReducer.drinks);

  useEffect(() => {
    dispatch(getDrinks());
  }, []);

  const addToBasket = (index) => {
    const newSnacks = { ...drinks[index], count: 1 };
    dispatch(setBasket(newSnacks));
  };

  return (
    <div className="piazza_content">
      {drinks.map((d, index) => (
        <div key={index} className="pizza_box">
          <div className="pizza_img">
            <img src={d.img} alt="snack" />
          </div>
          <div className="pizza_info drink_info">
            <h1>{d.name}</h1>
            <p>
              <span>{d.compound}</span>
            </p>
          </div>
          <div className="pizza_price drink_price">
            <span>{d.totalPrice}</span>
            <button onClick={() => addToBasket(index)} className="button_popup">
              Добавить в корзину
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Drink;
