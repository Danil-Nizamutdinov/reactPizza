/* eslint-disable no-case-declarations */
const SET_BASKET = "SET_BASKET";
const DELETE_ITEM = "DELETE_ITEM";
const UPDATEBASKET = "UPDATEBASKET";

const initialState = {
  basket: localStorage.getItem("basket")
    ? JSON.parse(localStorage.getItem("basket"))
    : [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BASKET:
      const newBasket = [...state.basket, { ...action.basket }];
      localStorage.setItem("basket", JSON.stringify(newBasket));
      return {
        ...state,
        basket: newBasket,
      };
    case DELETE_ITEM:
      const updatedBasket = state.basket.filter(
        (item, index) => index !== action.index
      );

      localStorage.setItem("basket", JSON.stringify(updatedBasket));

      return {
        ...state,
        basket: updatedBasket,
      };
    case UPDATEBASKET:
      localStorage.setItem("basket", JSON.stringify([...action.basket]));
      return {
        ...state,
        basket: [...action.basket],
      };
    default:
      return state;
  }
};

const updatedBasket = (basket) => ({ type: UPDATEBASKET, basket });
export const setBasket = (basket) => ({ type: SET_BASKET, basket });
export const deleteItemBasket = (index) => ({ type: DELETE_ITEM, index });

export const incrementItem = (index) => {
  return (dispatch, getState) => {
    const state = getState();
    const basket = state.basketReducer.basket;

    const newBasket = basket.map((obj, i) => {
      if (i === index) {
        return {
          ...obj,
          count: obj.count + 1,
          totalPrice: obj.totalPrice + obj.currentPrice,
        };
      }
      return obj;
    });

    dispatch(updatedBasket(newBasket));
  };
};

export const decrementItem = (index) => {
  return (dispatch, getState) => {
    const state = getState();
    const basket = state.basketReducer.basket;

    const newBasket = basket.map((obj, i) => {
      if (i === index) {
        if (obj.count != 1) {
          return {
            ...obj,
            count: obj.count - 1,
            totalPrice: obj.totalPrice - obj.currentPrice,
          };
        } else {
          return obj;
        }
      }
      return obj;
    });

    dispatch(updatedBasket(newBasket));
  };
};

export default basketReducer;
