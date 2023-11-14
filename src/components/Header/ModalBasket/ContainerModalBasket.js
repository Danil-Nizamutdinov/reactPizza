/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import ModalBasket from "./ModalBasket";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItemBasket,
  incrementItem,
  decrementItem,
} from "../../../redux/basket-reducer";
import { useNavigate } from "react-router-dom";

function ContainerModalBasket(props) {
  const { isBasket, toggleBasket } = props;

  const [price, setPrice] = useState();
  const [product, setProduct] = useState();

  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basketReducer.basket);
  const navigate = useNavigate();

  useEffect(() => {
    if (basket.length !== 0) {
      const sum = basket.map((b) => b.totalPrice).reduce((a, b) => a + b);
      const product = basket.length;
      setProduct(product);
      setPrice(sum);
    }
  }, [basket]);

  const deleteItem = (index) => {
    dispatch(deleteItemBasket(index));
  };

  const handleIncrement = (index) => {
    dispatch(incrementItem(index));
  };

  const handleDecrement = (index) => {
    dispatch(decrementItem(index));
  };

  const handleOrder = () => {
    navigate("/user");
    toggleBasket();
  };

  return (
    <ModalBasket
      basket={basket}
      isBasket={isBasket}
      toggleBasket={toggleBasket}
      price={price}
      product={product}
      deleteItem={deleteItem}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleOrder={handleOrder}
    />
  );
}

export default ContainerModalBasket;
