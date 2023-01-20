import {
    applyMiddleware,
    combineReducers,
    legacy_createStore,
  } from "redux";
  import thunk from "redux-thunk";
  import {reducer as AppReducer} from "../ReduxStore/AppStore/reducer";
  import {reducer as AuthReducer} from "../ReduxStore/AuthStore/reducer";
  
  
  let rootReducer = combineReducers({ AppReducer,AuthReducer,});

  
 
  export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));
  
 