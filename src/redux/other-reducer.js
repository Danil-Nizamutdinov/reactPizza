import { otherAPI } from "../api/api";

const SET_SNACKS = "SET_SNACKS";
const SET_DESSERT = "SET_DESSERT";
const SET_DRINKS = "SET_DRINKS";
const SET_CITY = "SET_CITY";

const initialState = {
  snacks: [],
  desserts: [],
  drinks: [],
  city: [],
};

const otherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SNACKS:
      return {
        ...state,
        snacks: [...action.snacks],
      };
    case SET_DESSERT:
      return {
        ...state,
        desserts: [...action.desserts],
      };
    case SET_DRINKS:
      return {
        ...state,
        drinks: [...action.drinks],
      };
    case SET_CITY:
      return {
        ...state,
        city: [...action.city],
      };

    default:
      return state;
  }
};

const setSnacks = (snacks) => ({ type: SET_SNACKS, snacks });
const setDesserts = (desserts) => ({ type: SET_DESSERT, desserts });
const setDrinks = (drinks) => ({ type: SET_DRINKS, drinks });
const setCity = (city) => ({ type: SET_CITY, city });

export const getSnacks = () => {
  return async (dispatch) => {
    const res = await otherAPI.getSnacks();
    dispatch(setSnacks(res));
  };
};

export const getDesserts = () => {
  return async (dispatch) => {
    const res = await otherAPI.getDesserts();
    dispatch(setDesserts(res));
  };
};

export const getDrinks = () => {
  return async (dispatch) => {
    const res = await otherAPI.getDrinks();
    dispatch(setDrinks(res));
  };
};

export const getCity = () => {
  return async (dispatch) => {
    const res = await otherAPI.getCity();
    dispatch(setCity(res));
  };
};

export default otherReducer;
