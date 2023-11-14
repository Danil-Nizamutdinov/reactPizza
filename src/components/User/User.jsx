/* eslint-disable react/prop-types */
import React from "react";

function User(props) {
  const { user, handleChangeNumber, handleChangeName, handleOrder } = props;

  return (
    <div className="user_box">
      <form action="">
        <label htmlFor="input" className="user_label">
          Как к вам можно обращаться
        </label>
        <input
          type="text"
          value={user.name}
          onChange={handleChangeName}
          placeholder="Иван Иванов"
          className="user_input"
        />

        <label htmlFor="input" className="user_label">
          Ваш номер телефона
        </label>
        <input
          type="text"
          maxLength="11"
          placeholder="8 888 888 88 88"
          value={user.number}
          onChange={handleChangeNumber}
          className="user_input"
        />

        <button className="user_button" onClick={handleOrder}>
          Далее
        </button>
      </form>
    </div>
  );
}

export default User;
