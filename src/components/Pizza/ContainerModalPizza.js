/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import ModalPizza from "./ModalPizza";
import { useDispatch, useSelector } from "react-redux";
import {
  getPizza,
  changePriceTopping,
  changeDough,
  changePriceSize,
} from "../../redux/pizza-reducer";
import { setBasket } from "../../redux/basket-reducer";
import { useParams } from "react-router-dom";

function ContainerModalPizza(props) {
  const { isPopup, togglePopup, setIsPopup } = props;
  const dispatch = useDispatch();
  const pizza = useSelector((state) => state.pizzaReducer.pizza);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPizza(id));
    if (id) {
      setIsPopup(true);
    }
  }, [id]);

  const dispatchChangePriceTopping = (index, toggler) => {
    dispatch(changePriceTopping(index, toggler));
  };

  const dispatchChangePriceSize = (index, sizePrice, toggler) => {
    dispatch(changePriceSize(index, sizePrice, toggler));
  };

  const dispatchChangeDough = (index, toggler) => {
    dispatch(changeDough(index, toggler));
  };

  const addToBasket = () => {
    const newPizzaSizes = pizza.sizes.find((obj) => obj.toggler);
    const newPizzaDough = pizza.dough.find((obj) => obj.toggler);
    const newPizzaTopping = pizza.toppings.filter((obj) => obj.toggler);

    dispatch(
      setBasket({
        ...pizza,
        sizes: newPizzaSizes,
        toppings: newPizzaTopping,
        dough: newPizzaDough,
        currentPrice: pizza.totalPrice,
        count: 1,
        key: "pizza",
      })
    );
    togglePopup();
  };

  return (
    <ModalPizza
      isPopup={isPopup}
      togglePopup={togglePopup}
      pizza={pizza}
      dispatchChangePriceTopping={dispatchChangePriceTopping}
      dispatchChangePriceSize={dispatchChangePriceSize}
      dispatchChangeDough={dispatchChangeDough}
      addToBasket={addToBasket}
    />
  );
}

export default ContainerModalPizza;
