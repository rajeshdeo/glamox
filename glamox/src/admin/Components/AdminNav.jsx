import styles from '../Styles/HomeAd.module.css';
import { useNavigate } from 'react-router-dom';

const AdminNav=()=>{
    const navigate = useNavigate();
    return <div>
        <div className={styles.buttonBox} >
            <button onClick={()=>navigate('/makeupAd')}>Makeup</button>
            <button onClick={()=>navigate('/skinAd')}>Skin</button>
            <button onClick={()=>navigate('/hairAd')}>Hair</button>
            <button>Admin Home</button>
        </div>
    </div>
}

export default AdminNav;