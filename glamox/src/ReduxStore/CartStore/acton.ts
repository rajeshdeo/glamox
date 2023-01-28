import {
  CART_ADD,
  CART_EMPTY,
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

const emptyCart = () => {
  return { type: CART_EMPTY };
};

export {addCart,removeCart,quantityCart,emptyCart}