/* eslint-disable react/prop-types */
import React from "react";
import iconCross from "../../img/icon-cross-black.svg";

function ModalPizza(props) {
  const {
    isPopup,
    togglePopup,
    pizza,
    dispatchChangePriceTopping,
    dispatchChangePriceSize,
    dispatchChangeDough,
    addToBasket,
  } = props;

  return (
    <div
      className={`modal_pizza ${isPopup ? "modal_pizza_active" : ""}`}
      onClick={togglePopup}
    >
      <div
        className={`pizza_popup ${isPopup ? "pizza_popup_active" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pizza_popup_close">
          <img
            src={iconCross}
            alt="cross"
            className="icon_cross_black"
            onClick={togglePopup}
          />
        </div>
        <div className="pizza_popup_img">
          <img src={pizza.bigImg} alt="" />
        </div>
        <div className="pizza_popup_content">
          <div className="pizza_popup_content_scroll">
            <h1 className="pizza_popup_content_title">{pizza.name}</h1>
            {pizza?.sizes?.map((s) =>
              s.toggler
                ? pizza.dough.map((sd, index) =>
                    sd.toggler ? (
                      <span
                        key={index}
                        className="pizza_popup_content_title_info"
                      >
                        {s.size}, {sd.name}, {s.gram}
                      </span>
                    ) : (
                      ""
                    )
                  )
                : ""
            )}
            <p className="pizza_popup_content_structure">
              <span>{pizza.compound}</span>
            </p>
            <div className="pizza_popup_content_size">
              {pizza.sizes?.map((s, index) => (
                <button
                  key={index}
                  className={`pizza_popup_content_size_button ${
                    s.toggler ? "pizza_popup_content_size_button_active" : ""
                  }`}
                  onClick={() =>
                    dispatchChangePriceSize(index, s.price, s.toggler)
                  }
                >
                  {s.name}
                </button>
              ))}
            </div>
            <div className="pizza_popup_content_dough">
              {pizza.dough?.map((d, index) => (
                <button
                  key={index}
                  className={`pizza_popup_content_dough_button ${
                    d.toggler ? "pizza_popup_content_dough_button_active" : ""
                  }`}
                  onClick={() => dispatchChangeDough(index, d.toggler)}
                >
                  {d.name}
                </button>
              ))}
            </div>
            <h2 className="pizza_popup_content_topping_title">
              Добавить по вкусу
            </h2>
            <div className="pizza_popup_content_topping">
              {pizza.toppings?.map((t, index) => (
                <div
                  key={index}
                  className={`pizza_popup_content_topping_box ${
                    t.toggler ? "pizza_popup_content_topping_box_active" : ""
                  }`}
                  onClick={() => dispatchChangePriceTopping(index, t.toggler)}
                >
                  <img src={t.img} alt="" />
                  <p>{t.name}</p>
                  <span>{t.price}р</span>
                </div>
              ))}
            </div>
          </div>
          <div className="pizza_popup_content_button">
            <button onClick={addToBasket}>
              Добавить в корзину за {pizza.totalPrice}р
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalPizza;
