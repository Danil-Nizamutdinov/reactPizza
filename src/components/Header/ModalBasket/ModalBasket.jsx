/* eslint-disable react/prop-types */
import React from "react";
import iconCross from "../../../img/icon-cross-black.svg";

function ModalBasket(props) {
  const {
    isBasket,
    toggleBasket,
    price,
    product,
    deleteItem,
    handleIncrement,
    handleDecrement,
    basket,
    handleOrder,
  } = props;

  return (
    <div
      className={`modal_basket ${isBasket ? "modal_basket_active" : ""}`}
      onClick={toggleBasket}
    >
      <div
        className={`popup_basket ${isBasket ? "popup_basket_active" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {basket.length !== 0 ? (
          <>
            <div className="popup_basket_scroll">
              <h1 className="popup_basket_title">
                {product} товаров на {price}р
              </h1>
              {basket.map((b, index) =>
                b.key === "pizza" ? (
                  <div key={index} className="popup_basket_info_content">
                    <div className="popup_basket_info">
                      <img
                        src={b.bigImg}
                        className="popup_basket_info_img"
                        alt="product"
                      />
                      <div className="popup_basket_info_text">
                        <h2>{b.name}</h2>
                        <p>
                          {b.sizes.name} {b.sizes.name}, {b.dough.name} тесто
                        </p>
                      </div>
                    </div>
                    <div className="popup_basket_price_content">
                      <span className="popup_basket_price">
                        {b.totalPrice}р
                      </span>
                      <div className="popup_basket_add">
                        <button onClick={() => handleDecrement(index)}>
                          -
                        </button>
                        <span>{b.count}</span>
                        <button onClick={() => handleIncrement(index)}>
                          +
                        </button>
                      </div>
                    </div>
                    <span
                      className="del_pizza"
                      onClick={() => deleteItem(index)}
                    >
                      <img src={iconCross} alt="del" />
                    </span>
                  </div>
                ) : (
                  <div key={index} className="popup_basket_info_content">
                    <div className="popup_basket_info">
                      <img
                        src={b.img}
                        className="popup_basket_info_img"
                        alt="product"
                      />
                      <div className="popup_basket_info_text">
                        <h2>{b.name}</h2>
                      </div>
                    </div>
                    <div className="popup_basket_price_content">
                      <span className="popup_basket_price">
                        {b.totalPrice}р
                      </span>
                      <div className="popup_basket_add">
                        <button onClick={() => handleDecrement(index)}>
                          -
                        </button>
                        <span>{b.count}</span>
                        <button onClick={() => handleIncrement(index)}>
                          +
                        </button>
                      </div>
                    </div>
                    <span
                      className="del_pizza"
                      onClick={() => deleteItem(index)}
                    >
                      <img src={iconCross} alt="" />
                    </span>
                  </div>
                )
              )}
            </div>

            <div className="popup_basket_footer_content">
              <div className="popup_basket_footer_info">
                <div>Сумма заказа</div>
                <div>{price}р</div>
              </div>
              <button onClick={handleOrder}>К оформлению заказа</button>
            </div>
            <span className="popup_basket_close">
              <img src={iconCross} alt="" width="30px" onClick={toggleBasket} />
            </span>
          </>
        ) : (
          <>
            <span className="popup_basket_close">
              <img src={iconCross} alt="" width="30px" onClick={toggleBasket} />
            </span>
          </>
        )}
      </div>
    </div>
  );
}

export default ModalBasket;
