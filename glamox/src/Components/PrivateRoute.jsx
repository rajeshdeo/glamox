import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children})=>{

    const location = useLocation();
    const isAuthV = useSelector((store)=>store.AuthReducer.isAuth);

    if(!isAuthV){
        return <Navigate to={'/adlogin'} state={location.pathname} replace/>
    }
    else{
        return children;
    }
}

export default PrivateRoute;
// export {PrivateRoute}