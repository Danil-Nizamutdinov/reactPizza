import { pizzaAPI } from "../api/api";

const SET_PIZZAS = "SET_PIZZAS";
const SET_PIZZA = "SET_PIZZA";
const SET_CURREBT_TOPPING_PRICE = "SET_CURREBT_TOPPING_PRICE";
const SET_CURREBT_SIZE_PRICE = "SET_CURREBT_SIZE_PRICE";

const initialState = {
  pizzas: [],
  pizza: {},

  currentToppingPrice: 0,
  currentSizePrice: 0,
};

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PIZZAS:
      return {
        ...state,
        pizzas: [...action.pizzas],
      };

    case SET_PIZZA:
      return {
        ...state,
        pizza: { ...action.pizza[0] },
      };
    case SET_CURREBT_TOPPING_PRICE:
      return {
        ...state,
        currentToppingPrice: action.sum,
      };
    case SET_CURREBT_SIZE_PRICE:
      return {
        ...state,
        currentSizePrice: action.sum,
      };

    default:
      return state;
  }
};

const setPizzas = (pizzas) => ({ type: SET_PIZZAS, pizzas });
const setCurrentToppingPrice = (sum) => ({
  type: SET_CURREBT_TOPPING_PRICE,
  sum,
});
const setCurrentSizePrice = (sum) => ({ type: SET_CURREBT_SIZE_PRICE, sum });
export const setPizza = (pizza) => ({ type: SET_PIZZA, pizza });

export const getPizzas = () => {
  return async (dispatch) => {
    const res = await pizzaAPI.getPizzas();
    dispatch(setPizzas(res));
  };
};

export const getPizza = (id) => {
  return async (dispatch) => {
    const res = await pizzaAPI.getPizza(id);
    dispatch(setPizza(res));
  };
};

export const changePriceTopping = (index, toggler) => {
  return (dispatch, getState) => {
    const state = getState();
    const pizza = state.pizzaReducer.pizza;
    const currentSizePrice = state.pizzaReducer.currentSizePrice;

    const newPizzaToppings = [...pizza.toppings];
    newPizzaToppings[index].toggler = !toggler;

    let sum = newPizzaToppings
      .filter((t) => t.toggler)
      .reduce((total, current) => total + current.price, 0);

    dispatch(setCurrentToppingPrice(sum));

    dispatch(
      setPizza([
        {
          ...pizza,
          toppings: newPizzaToppings,
          totalPrice: pizza.price + sum + currentSizePrice,
        },
      ])
    );
  };
};

export const changePriceSize = (index, sizePrice, toggler) => {
  return (dispatch, getState) => {
    const state = getState();
    const pizza = state.pizzaReducer.pizza;
    const currentToppingPrice = state.pizzaReducer.currentToppingPrice;

    if (!toggler) {
      const newPizzaSizes = [...pizza.sizes].map((obj) => {
        return {
          ...obj,
          toggler: false,
        };
      });

      newPizzaSizes[index].toggler = true;

      dispatch(setCurrentSizePrice(sizePrice));

      dispatch(
        setPizza([
          {
            ...pizza,
            sizes: newPizzaSizes,
            totalPrice: pizza.price + sizePrice + currentToppingPrice,
          },
        ])
      );
    }
  };
};

export const changeDough = (index, toggler) => {
  return (dispatch, getState) => {
    const state = getState();
    const pizza = state.pizzaReducer.pizza;

    if (!toggler) {
      const newPizzaDough = [...pizza.dough].map((obj) => {
        return {
          ...obj,
          toggler: false,
        };
      });

      newPizzaDough[index].toggler = true;

      dispatch(
        setPizza([
          {
            ...pizza,
            dough: newPizzaDough,
          },
        ])
      );
    }
  };
};

export default pizzaReducer;
