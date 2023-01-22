// import * as types from './actionTypes';

import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";

const initialState={
    token:"",
    isAuth:false,
    isLoading:false,
    isError:false,
}

const reducer = (oldState = initialState,{type, payload})=>{
    
    switch(type){
        case LOGIN_REQUEST:
            return {...oldState, isLoading:true};
        case LOGIN_SUCCESS:
            return {...oldState, isLoading:false, isAuth:true, token:payload};
        case LOGIN_ERROR:
            return {...oldState, isLoading:false, isError:true, isAuth:false};
        default:
            return oldState;
    }
}

export {reducer}

