import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import User from "./User";

function ContainerUser() {
  const [user, setUser] = useState({
    name: "",
    number: "",
  });
  const [isValidNum, setIsValidNum] = useState(false);

  const navigate = useNavigate();

  const handleChangeNumber = (event) => {
    const newNumber = event.target.value;
    const cleanedNumber = newNumber.replace(/\D/g, "");
    const newUser = { ...user, number: cleanedNumber };

    setUser(newUser);
    setIsValidNum(/^7|8\d{10}$/.test(cleanedNumber));
  };
  const handleChangeName = (event) => {
    const newName = event.target.value;
    const lettersOnly = /^[A-Za-zА-Яа-яЁё\s]+$/;
    const newUser = { ...user, name: newName };

    if (newName === "" || lettersOnly.test(newName)) {
      setUser(newUser);
    }
  };

  const handleOrder = (e) => {
    e.preventDefault();
    if (isValidNum) {
      navigate("/map");
    } else {
      alert("Введен не коректный номер телефона");
    }
  };
  return (
    <User
      user={user}
      handleChangeNumber={handleChangeNumber}
      handleChangeName={handleChangeName}
      handleOrder={handleOrder}
    />
  );
}

export default ContainerUser;
