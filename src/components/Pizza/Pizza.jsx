import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPizzas } from "../../redux/pizza-reducer";
import ContainerModalPizza from "./ContainerModalPizza";
import { Link, useNavigate } from "react-router-dom";

function Pizza() {
  const dispatch = useDispatch();
  const pizzas = useSelector((state) => state.pizzaReducer.pizzas);
  const navigate = useNavigate();
  const [isPopup, setIsPopup] = useState(false);

  useEffect(() => {
    dispatch(getPizzas());
  }, []);

  const togglePopup = () => {
    setIsPopup(!isPopup);

    if (isPopup) {
      navigate("/");
    }
  };

  return (
    <section>
      <div className="piazza_content">
        {pizzas.map((p, index) => (
          <div key={index} className="pizza_box">
            <div className="pizza_img">
              <img src={p.mediumlImg} alt="pizza" />
            </div>
            <div className="pizza_info">
              <h1>{p.name}</h1>
              <p>
                <span>{p.compound}</span>
              </p>
            </div>
            <div className="pizza_price">
              <span>{p.price}</span>
              <Link to={p.id} onClick={togglePopup} className="button_popup">
                Выбрать
              </Link>
            </div>
          </div>
        ))}
        <ContainerModalPizza
          isPopup={isPopup}
          togglePopup={togglePopup}
          setIsPopup={setIsPopup}
        />
      </div>
    </section>
  );
}

export default Pizza;
