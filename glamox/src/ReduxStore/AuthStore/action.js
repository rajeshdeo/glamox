import axios from 'axios';
import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from './actionType';



const loginReq = ()=>{
    return{
        type: LOGIN_REQUEST
    }
}
const loginSuc = (payload)=>{
    return{
        type: LOGIN_SUCCESS,
        payload
    }
}
const loginErr = ()=>{
    return{
        type: LOGIN_ERROR
    }
}

function getLogin(userData){

    return function(dispatch){
        dispatch(loginReq())
        return(
            axios.post("https://reqres.in/api/login", userData).then(r=>{
                dispatch(loginSuc(r.data.token))
                // console.log(r.data.token);
            }).catch(e=>{
                dispatch(loginErr())
            })
        )
    }
}
export default getLogin;

// https://reqres.in/api/login
