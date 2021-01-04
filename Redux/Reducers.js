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
        cart: state.cart.concat({ title: action.data, img: action.img }),
      };

    case DELETETOCART:
      return {
        //delete
      };
    default:
      return state;
  }
};
