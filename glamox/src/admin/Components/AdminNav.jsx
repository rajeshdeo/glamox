import styles from '../Styles/HomeAd.module.css';
import { useNavigate } from 'react-router-dom';

const AdminNav=()=>{
    const navigate = useNavigate();
    return <div>
        <div className={styles.buttonBox} >
            <button onClick={()=>navigate('/makeupAd')}>Makeup</button>
            <button onClick={()=>navigate('/skinAd')}>Skin</button>
            <button onClick={()=>navigate('/hairAd')}>Hair</button>
            <button onClick={()=>navigate('/makeupAd')}>Admin Home</button>
            <button onClick={()=>navigate('/adlogin')}>Logout Admin</button>
        </div>
    </div>
}

export default AdminNav;