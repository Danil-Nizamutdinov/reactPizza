import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSnacks } from "../../redux/other-reducer";
import { setBasket } from "../../redux/basket-reducer";

function Snack() {
  const dispatch = useDispatch();
  const snacks = useSelector((state) => state.otherReducer.snacks);

  useEffect(() => {
    dispatch(getSnacks());
  }, []);

  const addToBasket = (index) => {
    const newSnacks = { ...snacks[index], count: 1 };
    dispatch(setBasket(newSnacks));
  };

  return (
    <div className="piazza_content">
      {snacks.map((s, index) => (
        <div key={index} className="pizza_box">
          <div className="pizza_img">
            <img src={s.img} alt="snack" />
          </div>
          <div className="pizza_info">
            <h1>{s.name}</h1>
            <p>
              <span>{s.compound}</span>
            </p>
          </div>
          <div className="pizza_price">
            <span>{s.totalPrice}</span>
            <button onClick={() => addToBasket(index)} className="button_popup">
              Добавить в корзину
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Snack;
