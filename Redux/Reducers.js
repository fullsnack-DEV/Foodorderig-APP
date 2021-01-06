import { ADDTOCART, DELETETOCART } from "./ActionType";
import Recipedata from "../data/Recipedata";

const intialState = {
  cart: [],
};

export const mainreducer = (state = intialState, action) => {
  console.log(state);
  switch (action.type) {
    case ADDTOCART:
      return {
        //add
        ...state,
        cart: state.cart.concat({
          title: action.data,
          img: action.img,
          key: Math.random(),
        }),
      };

    case DELETETOCART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.key != action.key),
      };
    default:
      return state;
  }
};
