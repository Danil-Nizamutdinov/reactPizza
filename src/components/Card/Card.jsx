/* eslint-disable react/prop-types */
import React from "react";

function Card(props) {
  const {
    cardType,
    optionYear,
    optionMonth,
    handleOnFocus,
    handleChangeNumber,
    handleChangeHolder,
    handleChangeMoth,
    handleChangeYear,
    handleChangeCvv,
    handleOrder,
    card,
    cardToggler,
  } = props;

  return (
    <div className="card_box">
      <div className="card_info">
        <div
          className={`card_info_front ${
            cardToggler ? "card_info_front_active" : ""
          }`}
        >
          <div className="card_info_images">
            <img
              src="https://realtime.zenithbank.com/OnlineVirtualCard/Content/Backgrounds/seal.png"
              alt="icon"
            />
            <span className="cardType">{cardType}</span>
          </div>
          <div className="card_info_number">{card.number}</div>
          <div className="flexbox">
            <div className="box">
              <span>card holder</span>
              <div className="card_info_holder">{card.holder}</div>
            </div>
            <div className="box">
              <span>expires</span>
              <div className="expiration">
                <span className="exp_month">{card.month} </span>
                <span className="exp_year">{card.year}</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`card_info_back ${
            cardToggler ? "card_info_back_active" : ""
          }`}
        >
          <div className="stripe"></div>
          <div className="card_info_back_box">
            <span>{card.cvv}</span>
            <div className="cvv_box"></div>
            <span>{cardType}</span>
          </div>
        </div>
      </div>
      <div className="card_content">
        <div className="inputBox">
          <span>card number</span>
          <input
            type="text"
            className="card_number_input"
            maxLength="16"
            value={card.number}
            onChange={handleChangeNumber}
          />
        </div>
        <div className="inputBox">
          <span>card holder</span>
          <input
            type="text"
            className="card_holder_input"
            value={card.holder}
            onChange={handleChangeHolder}
          />
        </div>
        <div className="flexbox">
          <div className="inputBox">
            <span>expiration mm</span>
            <select
              className="card_month_input"
              value={card.month}
              onChange={handleChangeMoth}
            >
              {optionMonth.map((m, index) => (
                <option key={index} value={m.value}>
                  {m.text}
                </option>
              ))}
            </select>
          </div>
          <div className="inputBox">
            <span>expiration yy</span>
            <select
              className="card_year_input"
              value={card.year}
              onChange={handleChangeYear}
            >
              {optionYear.map((y, index) => (
                <option key={index} value={y.value}>
                  {y.text}
                </option>
              ))}
            </select>
          </div>
          <div className="inputBox">
            <span>cvv</span>
            <input
              type="text"
              maxLength="3"
              className="card_cvv_input"
              value={card.cvv}
              onChange={handleChangeCvv}
              onFocus={handleOnFocus}
              onBlur={handleOnFocus}
            />
          </div>
        </div>
        <button className="card_button" onClick={handleOrder}>
          Заказать
        </button>
      </div>
    </div>
  );
}

export default Card;
