import {
  CART_ADD,
  CART_EMPTY,
  CART_QUANTITY,
  CART_REMOVE,
} from "./actionTypes";

let initial: any = [];

export const reducer = (state = initial, action: any) => {
  switch (action.type) {
    case CART_ADD:
      return [
        ...state,
        {
          ...action.payload,
          qty: 1,
          altprice: function () {
            return this.price * this.qty;
          },
        },
      ];
    case CART_REMOVE:
      return state.filter((el: any, i: any) => i != action.payload);
    case CART_QUANTITY:
      return state.map((item:any,i:any)=>{return i == action.payload[0] ? { ...item, qty: action.payload[1] } : { ...item }})
    case CART_EMPTY: return state=[];
    default:
      return state;
  }
};

// altprice: function () {
//            return this.price * this.quantity;
//         }F
