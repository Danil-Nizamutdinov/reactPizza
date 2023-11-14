import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import pizzaReducer from "./pizza-reducer";
import basketReducer from "./basket-reducer";
import otherReducer from "./other-reducer";

let state = combineReducers({
  pizzaReducer,
  basketReducer,
  otherReducer,
});

let store = createStore(state, applyMiddleware(thunk));

export default store;
