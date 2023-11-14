import React from "react";
import { useState } from "react";
import * as valid from "card-validator";
import Card from "./Card";

function ContainerCard() {
  const [card, setCard] = useState({
    number: "#### #### #### ####",
    holder: "full name",
    month: "month",
    year: "year",
    cvv: "cvv",
  });
  const [cardToggler, setCardToggler] = useState(false);
  const [isValidNumber, setIsValidNumber] = useState(false);
  const [cardType, setCardType] = useState("Card Type");
  const optionYear = [
    { value: "year", text: "year" },
    { value: "2023", text: "2023" },
    { value: "2024", text: "2024" },
    { value: "2025", text: "2025" },
    { value: "2026", text: "2026" },
    { value: "2027", text: "2027" },
    { value: "2028", text: "2028" },
    { value: "2029", text: "2029" },
    { value: "2030", text: "2030" },
    { value: "2031", text: "2031" },
    { value: "2032", text: "2032" },
    { value: "2033", text: "2033" },
  ];
  const optionMonth = [
    { value: "month", text: "month" },
    { value: "01", text: "01" },
    { value: "02", text: "02" },
    { value: "03", text: "03" },
    { value: "04", text: "04" },
    { value: "05", text: "05" },
    { value: "06", text: "06" },
    { value: "07", text: "07" },
    { value: "08", text: "08" },
    { value: "09", text: "09" },
    { value: "10", text: "10" },
    { value: "11", text: "11" },
    { value: "12", text: "12" },
  ];

  const handleOnFocus = () => {
    setCardToggler(!cardToggler);
  };

  const handleChangeNumber = (event) => {
    const newNumber = event.target.value;
    const cardNumber = newNumber.replace(/\s/g, "");

    const validation = valid.number(cardNumber);

    const newCard = { ...card, number: cardNumber };

    setCard(newCard);
    setIsValidNumber(validation.isValid);

    if (validation.card) {
      setCardType(validation.card.niceType);
    } else {
      setCardType("Card Type");
    }
  };
  const handleChangeHolder = (event) => {
    const newHolder = event.target.value;
    const newCard = { ...card, holder: newHolder };

    setCard(newCard);
  };
  const handleChangeMoth = (event) => {
    const newMonth = event.target.value;
    const newCard = { ...card, month: newMonth };

    setCard(newCard);
  };
  const handleChangeYear = (event) => {
    const newYear = event.target.value;
    const newCard = { ...card, year: newYear };

    setCard(newCard);
  };
  const handleChangeCvv = (event) => {
    const newCvv = event.target.value;
    const newCard = { ...card, cvv: newCvv };

    setCard(newCard);
  };

  const handleOrder = () => {
    if (
      isValidNumber &&
      card.cvv.length === 3 &&
      card.year >= 1 &&
      card.month >= 1
    ) {
      alert("все хорошо");
    } else {
      alert("данные введены некорректно");
    }
  };
  return (
    <Card
      card={card}
      cardToggler={cardToggler}
      cardType={cardType}
      optionYear={optionYear}
      optionMonth={optionMonth}
      handleOnFocus={handleOnFocus}
      handleChangeNumber={handleChangeNumber}
      handleChangeHolder={handleChangeHolder}
      handleChangeMoth={handleChangeMoth}
      handleChangeYear={handleChangeYear}
      handleChangeCvv={handleChangeCvv}
      handleOrder={handleOrder}
    />
  );
}

export default ContainerCard;
