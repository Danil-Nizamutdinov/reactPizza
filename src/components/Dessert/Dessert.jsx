import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDesserts } from "../../redux/other-reducer";
import { setBasket } from "../../redux/basket-reducer";

function Dessert() {
  const dispatch = useDispatch();
  const desserts = useSelector((state) => state.otherReducer.desserts);

  useEffect(() => {
    dispatch(getDesserts());
  }, []);

  const addToBasket = (index) => {
    const newDesserts = { ...desserts[index], count: 1 };
    dispatch(setBasket(newDesserts));
  };

  return (
    <div className="piazza_content">
      {desserts.map((d, index) => (
        <div key={index} className="pizza_box">
          <div className="pizza_img">
            <img src={d.img} alt="snack" />
          </div>
          <div className="pizza_info">
            <h1>{d.name}</h1>
            <p>
              <span>{d.compound}</span>
            </p>
          </div>
          <div className="pizza_price">
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

export default Dessert;
