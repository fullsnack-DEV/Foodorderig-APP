import { ADDTOCART, DELETETOCART } from "./ActionType";
//create a action creatror

export const addtocart = (title, img) => ({
  type: ADDTOCART,
  data: title,
  img: img,
});

export const deletetocart = (id) => ({
  type: DELETETOCART,
  data: id,
});
