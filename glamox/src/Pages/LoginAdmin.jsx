import { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import getLogin from "../ReduxStore/AuthStore/action";
import styles from '../admin/Styles/adminLogin.module.css';

const LoginAdmin=()=>{
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = ()=>{
        const userData = {
            email,
            password
        }
        dispatch(getLogin(userData)).then(()=>{
            navigate('/admin')
        })
    } 

    return <>
    <div>
        <div className={styles.mainBox}>
            <div className={styles.heading}>
                <h1>Please Login First</h1>
            </div>

            <div className={styles.inputBox}>
                <div className={styles.imageInputBox}>
                    <label>Username: </label>
                    <input className={styles.input} type="text"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>

                <div className={styles.imageInputBox}>
                    <label> Password: </label>
                    <input className={styles.input} type="password" value={password} onChange={(e)=>setPass(e.target.value)}/>
                </div>

                <div className={styles.sideAddButtonBox}>
                    <button className={styles.sideAddButton}
                    onClick={handleLogin}>Submit</button>
                </div>
            </div>
        </div>
    </div>
    </>

}

export default LoginAdmin;