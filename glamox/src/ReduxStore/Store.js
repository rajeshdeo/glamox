import {
    applyMiddleware,
    combineReducers,
    legacy_createStore,
  } from "redux";
  import {thunk} from "redux";
  import {reducer as AppReducer} from "../ReduxStore/AppStore";
  import {reducer as AuthReducer} from "../ReduxStore/AuthStore";
  
  
  let rootReducer = combineReducers({ AppReducer,AuthReducer,});

  
 
  export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));
  
 