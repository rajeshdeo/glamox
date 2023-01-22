import {
  CART_ADD,
  CART_PRICE,
  CART_QUANTITY,
  CART_REMOVE,
} from "./actionTypes";


const addCart = (payload: any) => {
  return { type: CART_ADD, payload };
};

const removeCart = (payload: any) => {
  return { type: CART_REMOVE, payload };
};

const quantityCart = (index:any,el:any) => {
  return { type: CART_QUANTITY, payload:[index,+el] };
};

const priceCart = (payload: any) => {
  return { type: CART_PRICE, payload };
};

export {addCart,removeCart,quantityCart,priceCart}