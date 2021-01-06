import { ADDTOCART, DELETETOCART } from "./ActionType";
//create a action creatror

export const addtocart = (title, img) => ({
  type: ADDTOCART,
  data: title,
  img: img,
});

export const deletetocart = (key) => ({
  type: DELETETOCART,
  key: key,
});
